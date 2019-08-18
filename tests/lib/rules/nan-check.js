/**
 * @fileoverview NaN checks in JavaScript have many real weird pitfalls. You should opt-in for safer ways to check for NaN occurences.
 * @author Peter Perlepes
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/nan-check"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTesterES6 = new RuleTester({
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module"
  }
});

ruleTesterES6.run("nan-check", rule, {
  valid: [
    "const mightBeNaN = someWeirdComputation();if(Number.isNaN(mightBeNaN)){ console.log('Correct check for ES6'); }"
  ],

  invalid: [
    {
      code:
        "const mightBeNaN = someWeirdComputation();if(mightBeNaN == NaN){ console.log('Erroneous check!'); }",
      errors: [
        {
          messageId: "error"
        }
      ]
    },
    {
      code: "const booleanLogicNaN = computation() === NaN ? 0 : 1;",
      errors: [{ messageId: "error" }]
    }
  ]
});

var ruleTesterBelowES6 = new RuleTester({
  parserOptions: {
    ecmaVersion: 5
  }
});

ruleTesterBelowES6.run("nan-check", rule, {
  valid: [],
  invalid: [
    {
      code:
        "var mightBeNan = someWeirdComputation();if(isNaN(mightBeNaN)){ console.log('Erroneous check for ES5 and below!'); }",
      errors: [
        {
          messageId: "ES5NaN"
        }
      ]
    },
    {
      code: "var booleanLogicNaN = computation() === NaN ? 0 : 1;",
      errors: [{ messageId: "error" }]
    }
  ]
});
