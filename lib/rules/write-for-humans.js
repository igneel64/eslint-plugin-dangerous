/**
 * @fileoverview Right variables with more than 2 characters. Remember your code is read by a human not a machine.
 * @author Peter Perlepes
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description:
        "Right variables with more than 2 characters. Remember your code is read by a human not a machine.",
      category: "suggestion",
      recommended: false
    },
    fixable: null,
    schema: [],
    messages: {
      warn:
        "Add an understandable name. That means more than 2 characters long."
    }
  },

  create(context) {
    return {
      VariableDeclaration(node) {
        node.declarations.forEach(variableDeclarator => {
          if (variableDeclarator.id.name.length < 3) {
            context.report({ node, messageId: "warn" });
          }
        });
      }
    };
  }
};
