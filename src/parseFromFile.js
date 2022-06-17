const { readFileSync } = require('fs');

const parse = require('./parse');

/**
 * Parse a YFPL data from a file
 *
 * @param {string} filename
 */
function parseFromFile(filename) {
  const fileContent = readFileSync(filename, { encoding: 'utf8' });
  return parse(fileContent);
}

module.exports = parseFromFile;
