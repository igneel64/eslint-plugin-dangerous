# NaN-Check

 NaN (Not A Number) checks in JavaScript have many real and hard to track pitfalls. You should opt-in for safer ways to check for any NaN occurence.

## Rule Details

This rule aims to assist you in finding the places in your code that you are checking for NaN values in an unsafe way.

Examples of **incorrect** code for this rule:

```js
const result = someWeirdComputation();
if(result === NaN){
  console.log('NaN check will not work');
}
```

On ES5 and below environments the code below will also be considered illegal.
For ES6 and above, the spec got you covered with [Number.isNaN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN) .

```js
var result = someWeirdComputation();
if(isNaN(result)){
  console.log('NaN check will not work');
}
```

Examples of **correct** code for this rule:

```js
function willBeNaN(x){
  return x !== x;
}

var result = someWeirdComputation();
if(willBeNaN(result)){
  console.log('NaN check will work');
}
```

For ES6 and above, the code below will work.
```js
const result = someWeirdComputation();
if(Number.isNaN(result)){
  console.log('NaN check will work');
}
```

## Further Reading

- [The problem with testing for NaN](http://adripofjavascript.com/blog/drips/the-problem-with-testing-for-nan-in-javascript.html)
