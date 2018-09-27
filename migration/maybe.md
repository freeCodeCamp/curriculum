---
id: bd7123c8c441eddfaeb5bdef
title: Say Hello to HTML Elements
challengeType: 0
videoUrl: https://scrimba.com/p/pVMPUv/cE8Gpt2
---

## Description

Welcome to freeCodeCamp's HTML coding challenges. These will walk you through web development step-by-step.

---

To pass the test on this challenge, change your `h1` element's text to say "Hello World".

## Tests

```yml
tests:
  - text: Your <code>h1</code> element should have the text "Hello World".
    testString: assert.isTrue((/hello(\s)+world/gi).test($('h1').text()), 'Your <code>h1</code> element should have the text "Hello World".');
```

## Challenge Seed


### js

```js
function testFunction(arg) {
  return arg;
}

testFunction('hello');
```
#### Setup before each test

```js
console.log('before the test');

```
#### Teardown after each test

```js
console.info('after the test');

```

## Solution

```js
function testFunction(arg) {
  return arg;
}

testFunction('hello');
```
