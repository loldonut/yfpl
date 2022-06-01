# YFPL

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

const data = fs.readFileSync('/path/to/file');
const res = YFPL.parse(data);
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

## Data Types

**Data types can be:**

`string`
`number`
`boolean`
`null|undefined`

**Example of All Data Types**

```
str - "string"
num - 10111
bool - true
bool2 - false
nothing - null
again_nothing - undefined
```
