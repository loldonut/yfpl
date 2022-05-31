# YFL

`YFL` = `Your Friendly Language`

## Example

```
foo - "bar"
bar - false
```

Separate the name and value by `-`

**Important Note:** It's important to add spaces in-between `-` otherwise the parser won't be able to read your date!

### Parsing YFL to JS Object

```js
const YFL = require('yfl');

YFL.parse('some - "data"');
```

**Or read from a file:**

```js
const fs = require('node:fs');
// or require('fs');

const data = fs.readFileSync('/path/to/file');
const res = YFL.parse(data);
console.log(res);
```

## Data Types

**Data types can be:**

`string`
`number`
`boolean`
`null|undefined`

**Example of All Data Types**

```
str - "strint"
num - 10111
bool - true
bool2 - false
nothing - null
again_nothing - undefined
```
