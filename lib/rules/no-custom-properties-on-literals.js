/**
 * @fileoverview In JavaScript, you cannot add properties on Literal values. It is not marked as an error but it leads to unexpected behaviour.
 * @author Peter Perlepes
 */
"use strict";

const { findVariable } = require("eslint-utils");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description:
        "In JavaScript, you cannot add properties on Literal values. It does not seem to be an error but it leads to unexpected behaviour.",
      category: "problem",
      recommended: true
    },
    fixable: null,
    schema: [],
    messages: {
      warn: "Properties on Literal values do not apply."
    }
  },

  create: function(context) {
    return {
      AssignmentExpression(node) {
        const {
          left: {
            type,
            object: { type: objectType, name: objectName }
          }
        } = node;

        if (type !== "MemberExpression") {
          return;
        }

        if (objectType === "Literal") {
          context.report({ node, messageId: "warn" });
          return;
        }

        if (objectType === "Identifier") {
          const { references = [] } = findVariable(
            context.getScope(),
            objectName
          );
          let isInitialisedAsLiteral = false;
          references.forEach(({ init, writeExpr }) => {
            if (init && writeExpr.type === "Literal") {
              isInitialisedAsLiteral = true;
            }
          });
          if (isInitialisedAsLiteral) {
            context.report({ node, messageId: "warn" });
          }
        }
      }
    };
  }
};
