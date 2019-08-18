/**
 * @fileoverview This plugin is made to let you know of some of JavaScript&#39;s quirks that might lead to headaches later on in your program.
 * @author Peter Perlepes
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + "/rules");

module.exports.configs = {
  recommended: {
    rules: {
      "dangerous/nan-check": 2,
      "dangerous/no-custom-properties-on-literals": 2,
      "dangerous/write-for-humans": 2,
    }
  }
};
