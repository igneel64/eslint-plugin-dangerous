/**
 * @fileoverview In JavaScript, you cannot add properties on Literal values. It does not seem to be an error but it leads to unexpected behaviour.
 * @author Peter Perlepes
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-custom-properties-on-literals"),
  RuleTester = require("eslint").RuleTester;

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module"
  }
});

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();

ruleTester.run("no-custom-properties-on-literals", rule, {
  valid: [
    "({}).hello = 'world';",
    "var set = {};set.map = function map(){};",
    "const literal = 'hello world';const returnLiteral = (literal) => literal;returnLiteral(literal);"
  ],
  invalid: [
    {
      code: '"5".hello = "world";',
      errors: [
        {
          messageId: "warn"
        }
      ]
    },
    {
      code: "var set = 's';set.m = 'ten';var set=[];set[0] = 'test';", // Should add case about redefinition
      errors: [
        {
          messageId: "warn"
        },
        {
          messageId: "warn"
        }
      ]
    }
  ]
});
