/**
 * @fileoverview Right variables with more than 2 characters. Remember your code is read by a human not a machine.
 * @author Peter Perlepes
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/write-for-humans"),
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

ruleTester.run("write-for-humans", rule, {
  valid: [
    "let serverId = 1;",
    "const conversionRate = conversions/sessions;",
    "var domainNames = [];"
  ],

  invalid: [
    {
      code: "const st = '5';",
      errors: [
        {
          messageId: "warn"
        }
      ]
    }
  ]
});
