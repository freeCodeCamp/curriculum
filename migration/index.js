const unified = require('unified');
const vfile = require('to-vfile');
const report = require('vfile-reporter');
const markdown = require('remark-parse');
const remark2rehype = require('remark-rehype');
const html = require('rehype-stringify');
const frontmatter = require('remark-frontmatter');

const frontmatterToData = require('./frontmatter-to-data');

const processor = unified()
  .use(markdown)
  .use(frontmatter, ['yaml'])
  .use(frontmatterToData)
  // the two plugins below are just to stop the processor from throwing
  // we need to write a compiler that can create graphql nodes
  .use(remark2rehype)
  .use(html);

processor.process(vfile.readSync('maybe.md'), function(err, file) {
  if (err) {
    throw err;
  }
  console.error(report(file));
  console.log(file);
});
