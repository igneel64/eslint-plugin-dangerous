# eslint-plugin-dangerous

This plugin is made to let you know of some of JavaScript&#39;s quirks that might lead to headaches later on in your program.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-dangerous`:

```
$ npm install eslint-plugin-dangerous --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-dangerous` globally.

## Usage

Add `dangerous` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "dangerous"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "dangerous/rule-name": 2
    }
}
```


