/**
 * @fileoverview This plugin is made to let you know of some of JavaScript&#39;s quirks that might lead to headaches later on in your program.
 * @author Peter Perlepes
 */
"use strict";

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import all rules in lib/rules
module.exports.rules = {
  "nan-check": require("./rules/nan-check"),
  "no-custom-properties-on-literals": require("./rules/no-custom-properties-on-literals"),
  "write-for-humans": require("./rules/write-for-humans"),
}

module.exports.configs = {
  recommended: {
    rules: {
      "dangerous/nan-check": 2,
      "dangerous/no-custom-properties-on-literals": 2,
      "dangerous/write-for-humans": 2,
    }
  }
};
