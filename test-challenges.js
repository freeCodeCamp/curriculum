/* eslint-disable no-eval, no-process-exit, no-unused-vars */

import { Observable } from 'rx';
import tape from 'tape';

import getChallenges from './getChallenges';

import MongoIds from './mongoIds';
import ChallengeTitles from './challengeTitles';
import addAssertsToTapTest from './addAssertsToTapTest';
import { validateChallenge } from './schema/challengeSchema';

let mongoIds = new MongoIds();
let challengeTitles = new ChallengeTitles();

function evaluateTest(
  solution,
  assert,
  react,
  redux,
  reactRedux,
  head,
  tail,
  test,
  tapTest
) {
  // code and editor provide access to the original text of the solution, which
  // is needed since the solution itself is likely to change during
  // transpilation.
  let code = solution;
  const editor = {
    getValue() {
      return code;
    }
  };

  /* NOTE: Provide dependencies for React/Redux challenges
               * and configure testing environment
               */
  let React, ReactDOM, Redux, ReduxThunk, ReactRedux, Enzyme, document;

  // Fake Deep Equal dependency
  const DeepEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);

  // Hardcode Deep Freeze dependency
  const DeepFreeze = o => {
    Object.freeze(o);
    Object.getOwnPropertyNames(o).forEach(function(prop) {
      if (
        o.hasOwnProperty(prop) &&
        o[prop] !== null &&
        (typeof o[prop] === 'object' || typeof o[prop] === 'function') &&
        !Object.isFrozen(o[prop])
      ) {
        DeepFreeze(o[prop]);
      }
    });
    return o;
  };

  if (react || redux || reactRedux) {
    // Provide dependencies, just provide all of them
    React = require('react');
    ReactDOM = require('react-dom');
    Redux = require('redux');
    ReduxThunk = require('redux-thunk');
    ReactRedux = require('react-redux');
    Enzyme = require('enzyme');
    const Adapter16 = require('enzyme-adapter-react-16');
    Enzyme.configure({ adapter: new Adapter16() });

    /* Transpile ALL the code
                 * (we may use JSX in head or tail or tests, too): */
    const transform = require('babel-standalone').transform;
    const options = { presets: ['es2015', 'react'] };

    head = transform(head, options).code;
    solution = transform(solution, options).code;
    tail = transform(tail, options).code;
    test.testString = transform(test.testString, options).code;

    const { JSDOM } = require('jsdom');
    // Mock DOM document for ReactDOM.render method
    const jsdom = new JSDOM(`<!doctype html>
                  <html>
                    <body>
                      <div id="root"/>
                      <div id="challenge-node"/>
                    </body>
                  </html>
                `);
    const { window } = jsdom;

    // Mock DOM for ReactDOM tests
    document = window.document;
    global.window = window;
    global.document = window.document;
  }

  /* eslint-enable no-unused-vars */
  try {
    (() => {
      // As async tests are removed by createTest (since tests are run in series
      // and waiting the default of 5 seconds between each test could result in
      // an unreasonably slow test suite) the following differs somewhat from
      // learn/src/client/frame-runner.js
      const testOrResult = eval(
        head + '\n' + solution + '\n' + tail + '\n' + test.testString
      );
      if (typeof testOrResult === 'function') {
        // The function returned is intended to evaluate the text of the
        // solution, which code contains.
        testOrResult(() => code);
      }
    })();
  } catch (e) {
    console.log(head + '\n' + solution + '\n' + tail + '\n' + test.testString);
    console.log(e);
    tapTest.fail(e);
    process.exit(1);
  }
}

function createTest({
  title,
  id = '',
  tests = [],
  solutions = [],
  files = [],
  react = false,
  redux = false,
  reactRedux = false
}) {
  mongoIds.check(id, title);
  challengeTitles.check(title);

  solutions = solutions.filter(solution => !!solution);
  tests = tests.filter(test => !!test);

  // No support for async tests
  const isAsync = s => s.includes('(async () => ');
  if (isAsync(tests.join(''))) {
    console.log(`Replacing Async Tests for Challenge ${title}`);
    tests = tests.map(
      challengeTestSource =>
        isAsync(challengeTestSource)
          ? "assert(true, 'message: great');"
          : challengeTestSource
    );
  }
  const { head, tail } = Object.keys(files)
    .map(key => files[key])
    .reduce(
      (result, file) => ({
        head: result.head + ';' + file.head.join('\n'),
        tail: result.tail + ';' + file.tail.join('\n')
      }),
      { head: '', tail: '' }
    );
  const plan = tests.length;
  if (!plan) {
    return Observable.just({
      title,
      type: 'missing'
    });
  }

  return Observable.fromCallback(tape)(title)
    .doOnNext(
      tapTest => (solutions.length ? tapTest.plan(plan) : tapTest.end())
    )
    .flatMap(tapTest => {
      if (solutions.length <= 0) {
        return Observable.just({
          title,
          type: 'missing'
        });
      }

      return (
        Observable.just(tapTest)
          .map(addAssertsToTapTest)
          /* eslint-disable no-unused-vars */
          // assert and code used within the eval
          .doOnNext(assert => {
            solutions.forEach(solution => {
              tests.forEach(test => {
                evaluateTest(
                  solution,
                  assert,
                  react,
                  redux,
                  reactRedux,
                  head,
                  tail,
                  test,
                  tapTest
                );
              });
            });
          })
          .map(() => ({ title }))
      );
    });
}

Observable.from(getChallenges())
  .do(({ challenges }) => {
    challenges.forEach(challenge => {
      const result = validateChallenge(challenge);
      if (result.error) {
        console.log(result.value);
        throw new Error(result.error);
      }
    });
  })
  .flatMap(challengeSpec => {
    return Observable.from(challengeSpec.challenges);
  })
  .flatMap(challenge => {
    return createTest(challenge);
  })
  .map(({ title, type }) => {
    if (type === 'missing') {
      return title;
    }
    return false;
  })
  .filter(title => !!title)
  .toArray()
  .subscribe(
    noSolutions => {
      if (noSolutions) {
        console.log(
          '# These challenges have no solutions\n- [ ] ' +
            noSolutions.join('\n- [ ] ')
        );
      }
    },
    err => {
      throw err;
    },
    () => process.exit(0)
  );
