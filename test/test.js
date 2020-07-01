const assert = require('chai').assert;
const linter = require('../index.js');

describe('tags', function() {
  describe('sectiontag', function() {
    describe('hooks', function() {
      beforeEach(function() {
        linter = require('../index.js');
      });
    });

    it('should return 2 Errors when tag is unknown', function (done) {
      linter.lintFile('./testcases/unknowntag/unknown.md', function (err) {
        assert.equal(err.length, 2);
        assert.include(err[0].message, "Unknown tag \'endxyz\'");
        assert.include(err[1].message, "Unknown tag \'xyz\'");
        done();
      });
    });

    it('should return 1 Error when a block tag does not close', function (done) {
      linter.lintFile('./testcases/unclosed/form.md', function (err) {
        assert.equal(err.length, 1);
        assert.include(err[0].message, "form tag was never closed");
        done();
      });
    });

    it('should handle a valid multi line if statement', function (done) {
      linter.lintFile('./testcases/multiline/if.md', function (err) {
        console.log(err)
        assert.equal(err.length, 1);
        assert.include(err[0].message, "form tag was never closed");
        done();
      });
    });

    it('should return 1 Error when closed block tag does not open', function (done) {
      linter.lintFile('./testcases/unclosed/endform.md', function (err) {
        assert.equal(err.length, 1);
        assert.include(err[0].message, "Unknown tag \'endform\'");
        done();
      });
    });

    it('should return no Error when bgimage parameter is good', function (done) {
      linter.lintFile('./testcases/sectiontag/sectiontag-parameter-bgimage-passing.md', function (err) {
        assert.equal(err.length, 0);
        done();
      });
    });

  });

  describe('iftag', function() {
    describe('hooks', function() {
      beforeEach(function() {
        linter = require('../index.js');
      });
    });

    it('should return no Error when if tag is complete', function (done) {
      linter.lintFile('./testcases/ifstatement/ifstatement-complete.md', function (err) {
        assert.equal(err.length, 0);
        done();
      });
    });
    it('should return 1 Error when if tag is not closed', function (done) {
      linter.lintFile('./testcases/ifstatement/ifstatement-incomplete.md', function (err) {
        assert.equal(err.length, 1);
        done();
      });
    });
  });
});

describe('variables', function() {
  describe('hooks', function() {
    beforeEach(function() {
      linter = require('../index.js');
    });
  });

  it('Should return 1 Error, when variable is not closed', function (done) {
    linter.lintFile('./testcases/variable/variable-notclosing.md', function (err) {
      assert.equal(err.length, 1);
      assert.include(err[0].message, "Variable \'{{\' was not properly terminated");
      done();
    });
  });

  it('Should return no Error, when variable is not opening', function (done) {
    linter.lintFile('./testcases/variable/variable-notopening.md', function (err) {
      assert.equal(err.length, 0);
      done();
    });
  });

  it('Should have 2 Errors when document is malformed from file', function (done) {
    linter.lintFile('./testcases/fulldocuments/malformed.md', function (err) {
      assert.equal(err.length, 2);
      done();
    });
  });
});

describe('promisify', function() {
  describe('hooks', function() {
    beforeEach(function() {
      linter = require('../index.js');
    });
  });

  it('Should return 2 Error when parsing malformed document in promise mode', function (done) {
    linter.lintFilePromise('./testcases/fulldocuments/malformed.md')
      .then(function(err) {
        assert.equal(err.length, 2);
        done();
      });
  });
});

describe('whitespace', function() {
  describe('hooks', function() {
    beforeEach(function() {
      linter = require('../index.js');
    });
  });

  it('Should pass https://shopify.github.io/liquid/basics/whitespace', function (done) {
    linter.lintFile('./testcases/fulldocuments/whitespace.md', function (output) {
      assert.equal(output.length, 0);
      done();
    });
  });

  it('Should return no Error, when variable is not opening', function (done) {
    linter.lintFile('./testcases/variable/variable-notopening.md', function (err) {
      assert.equal(err.length, 0);
      done();
    });
  });
});

describe('shopify', function() {
  describe('hooks', function() {
    beforeEach(function() {
      linter = require('../index.js');
    });
  });

  it('Should pass https://shopify.dev/docs/themes/liquid/reference/basics', function (done) {
    linter.lintFile('./testcases/shopify/basics/name.md', function (output) {
      assert.equal(output.length, 0);
    });
    linter.lintFile('./testcases/shopify/basics/object.md', function (output) {
      assert.equal(output.length, 0);
    });
    linter.lintFile('./testcases/shopify/basics/filters.md', function (output) {
      assert.equal(output.length, 0);
    });

    done();
  });

  it('Should pass https://shopify.dev/docs/themes/liquid/reference/basics/operators', function (done) {
    linter.lintFile('./testcases/shopify/operators/basic.md', function (output) {
      assert.equal(output.length, 0);
    });
    linter.lintFile('./testcases/shopify/operators/contains.md', function (output) {
      assert.equal(output.length, 0);
    });
    linter.lintFile('./testcases/shopify/operators/multiple.md', function (output) {
      assert.equal(output.length, 0);
    });
    linter.lintFile('./testcases/shopify/operators/order.md', function (output) {
      assert.equal(output.length, 0);
    });

    done();
  });

  it('Should pass https://shopify.dev/docs/themes/liquid/reference/basics/types', function (done) {
    linter.lintFile('./testcases/shopify/types/array.md', function (output) {
      assert.equal(output.length, 0);
    });
    linter.lintFile('./testcases/shopify/types/boolean.md', function (output) {
      assert.equal(output.length, 0);
    });
    linter.lintFile('./testcases/shopify/types/empty.md', function (output) {
      assert.equal(output.length, 0);
    });
    linter.lintFile('./testcases/shopify/types/nil.md', function (output) {
      assert.equal(output.length, 0);
    });
    linter.lintFile('./testcases/shopify/types/number.md', function (output) {
      assert.equal(output.length, 0);
    });
    linter.lintFile('./testcases/shopify/types/string.md', function (output) {
      assert.equal(output.length, 0);
    });
    linter.lintFile('./testcases/shopify/types/unless.md', function (output) {
      assert.equal(output.length, 0);
    });

    done();
  });

  it('Should pass https://shopify.dev/docs/themes/liquid/reference/basics/true-and-false', function (done) {
    linter.lintFile('./testcases/shopify/truthy/empty.md', function (output) {
      assert.equal(output.length, 0);
    });
    linter.lintFile('./testcases/shopify/truthy/falsy.md', function (output) {
      assert.equal(output.length, 0);
    });
    linter.lintFile('./testcases/shopify/truthy/tags.md', function (output) {
      assert.equal(output.length, 0);
    });
    linter.lintFile('./testcases/shopify/truthy/truthy.md', function (output) {
      assert.equal(output.length, 0);
    });
    linter.lintFile('./testcases/shopify/truthy/unless.md', function (output) {
      assert.equal(output.length, 0);
    });

    done();
  });

  it('Should pass https://shopify.dev/docs/themes/liquid/reference/basics/whitespace', function (done) {
    linter.lintFile('./testcases/shopify/whitespace/control.md', function (output) {
      assert.equal(output.length, 0);
    });
    linter.lintFile('./testcases/shopify/whitespace/none.md', function (output) {
      assert.equal(output.length, 0);
    });
    linter.lintFile('./testcases/shopify/whitespace/variable.md', function (output) {
      assert.equal(output.length, 0);
    });

    done();
  });

  it('Should pass https://shopify.dev/docs/themes/liquid/reference/objects', function (done) {
    linter.lintFile('./testcases/shopify/objects.md', function (output) {
      assert.equal(output.length, 0);
    });

    done();
  });

  it('Should pass https://shopify.dev/docs/themes/liquid/reference/tags', function (done) {
    linter.lintFile('./testcases/shopify/tags.md', function (output) {
      assert.equal(output.length, 0);
    });

    done();
  });

  it('Should pass https://shopify.dev/docs/themes/liquid/reference/filters', function (done) {
    linter.lintFile('./testcases/shopify/tags.md', function (output) {
      assert.equal(output.length, 0);
    });

    done();
  });
});
