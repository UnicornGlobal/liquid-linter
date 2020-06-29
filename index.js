const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));

const Liquid = require("liquid");
const engine = new Liquid.Engine();

const replaceProblemWithSpace = (chunk, err) => {
  const problemReg = /at (.*) /;
  const replacer = err.message.match(problemReg)[1];
  var details = chunk.split(/\n/g);
  const index = err.location.line - 1;
  details[index] = 'xxxxxxxx';
  return details.join('\n');
};

const parseChunk = (chunk, errors) => {
  return engine
    .parse(chunk)
    .catch((err) => {
      if(err.name === "Liquid.SyntaxError") {
        errors.push(err);
      }
      chunk = replaceProblemWithSpace(chunk, err);
      return parseChunk(chunk, errors);
    });
};

const linter = {
  lintFile: (filepath, callback) => {
    const errors = [];
    const allchecks = [];
    const testString = fs.readFileSync(filepath).toString();
    allchecks.push(parseChunk(testString, errors));
    Promise.all(allchecks)
      .then(() => callback(errors.reverse()));
  },
  lintFilePromise: (filepath) => {
    const errors = [];
    const allchecks = [];
    return fs.readFileAsync(filepath)
      .then((buffer) => {
        allchecks.push(parseChunk(buffer.toString(), errors));
        return Promise.all(allchecks)
          .then(() => {
            return errors.reverse()
          });
      });
  },
  lintString: (string, callback) => {
    const errors = [];
    const allchecks = [];
    allchecks.push(parseChunk(string, errors));
    Promise.all(allchecks)
      .then(() => callback(errors.reverse()));
  },
  lintStringPromise: (string) => {
    const errors = [];
    const allchecks = [];
    allchecks.push(parseChunk(string, errors));
    return Promise.all(allchecks)
      .then(() => errors.reverse());
  },
  loadTags: (obj) => {
    const opts = {
      blocks: obj.blocks || [],
      tags: obj.tags || []
    };
    for (var i = 0; i < opts.blocks.length; i++) {
      engine.registerTag(opts.blocks[i], Liquid.Block);
    }
    for (var j = 0; j < opts.tags.length; j++) {
      engine.registerTag(opts.tags[j], Liquid.Tag);
    }
  },
};

module.exports = linter;
