# YFPL

<div align="center">
    <br>
    <p>
        <a href="https://github.com/loldonut/yfpl/actions/workflows/test.yml"><img src="https://github.com/loldonut/yfpl/actions/workflows/test.yml/badge.svg?branch=main" alt="testing"/></a>
        <img src="https://img.shields.io/bundlephobia/min/yfpl?logo=npm" alt="NPM minified size" />
        <img src="https://img.shields.io/npm/v/yfpl?label=Latest%20Release%20%28NPM%29&logo=npm" alt="npm" />
        <img alt="GitHub release (latest by date)" src="https://img.shields.io/github/v/release/loldonut/yfpl?label=Latest%20Release%20%28GitHub%29&logo=github" />
        <img alt="License" src="https://img.shields.io/github/license/loldonut/yfpl" />
    </p>
    </br>
</div>

`YFPL` = `Your Friendly Programming Language`

## Example

```
foo - "bar"
bar - false
```

Separate the name and value by `-`

**Important Note:** It's important to add spaces in-between `-` otherwise the parser won't be able to read your data!

### Parsing YFPL to JS Object

```js
const YFPL = require('yfpl');

YFPL.parse('some - "data"');
```

**Or read from a file:**

```js
const fs = require('node:fs');
// or require('fs');
const YFPL = require('yfpl');

const res = YFPL.parseFromFile('FILENAME');
console.log(res);
```

### Convert JS Object to valid YFPL data using `stringify`

```js
const YFPL = require('yfpl');

const dataObj = YFPL.stringify({
    some: 'data',
    right: true,
});

console.log(dataObj);
```

Should output:

```
some - "data"
right - true
```

You can also use stringify then output it to a file using `stringifyToFile`

```js
const YFPL = require('yfpl');

YFPL.stringify('OUTPUT_FILENAME', {
  an: 'object',
  to: 'convert to yfpl data',
});
```

## Data Types

<details>
<summary><b>Supported Data Types</b></summary>
<br>

`string`

`number`

`boolean`

`null`

`undefined`

</details>

**Example of All Data Types**

```
str - "string"
num - 10111
bool - true
bool2 - false
nothing - null
again_nothing - undefined
```
