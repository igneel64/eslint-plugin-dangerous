/**
 * @fileoverview NaN checks in JavaScript have many real weird pitfalls. You should opt-in for safer ways to check for NaN occurences.
 * @author Peter Perlepes
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description:
        "NaN checks in JavaScript have many real weird pitfalls. You should opt-in for safer ways to check for NaN occurences. If you are using ES6, the engine has you covered.",
      category: "problem",
      recommended: true
    },
    fixable: null,
    schema: [],
    messages: {
      error: "Checks for NaN using equality operators do not work as expected.",
      ES5NaN:
        "In ES5 and below environments, the isNaN function does now work as expected."
    }
  },

  create: function(context) {
    return {
      BinaryExpression(node) {
        const {
          operator = "",
          left: { name: leftOp = "" },
          right: { name: rightOp = "" }
        } = node;
        if (!operator.match(/[!,=]=/)) {
          return;
        }
        if (leftOp === "NaN" || rightOp === "NaN") {
          context.report({ node, messageId: "error" });
        }
      },
      CallExpression(node) {
        if (context.parserOptions.ecmaVersion > 5) {
          return;
        }
        if (node.callee.name === "isNaN") {
          context.report({ node, messageId: "ES5NaN" });
        }
      }
    };
  }
};
