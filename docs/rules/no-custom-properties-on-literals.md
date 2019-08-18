# No custom properties on literals 

In JavaScript, you cannot add properties on Literal values. It is not marked as an error but it leads to unexpected behaviour. (no-custom-properties-on-literals)

## Rule Details

This rule aims to assist you in finding the places in your code that you falsely added properties on otherwise literal values.

Examples of **incorrect** code for this rule:

```js
var peasant = 1;
peasant.hat = "wheat hat";
console.log(peasant.hat); // Logs undefined

var king = "1";
king.rule = function(){ console.log("I rule") };
king.rule(); // TypeError: king.rule is not a function
```

Examples of **correct** code for this rule:

```js
var king = {};
king.rule = function (){ console.log("I rule") };

```
