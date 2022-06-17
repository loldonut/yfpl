const { writeFileSync } = require('fs');

const stringify = require('./stringify');

/**
 *
 * @param {string} outputFilename 
 * @param {Object} data 
 */
function stringifyToFile(outputFilename, data) {
  writeFileSync(outputFilename, stringify(data));
}

module.exports = stringifyToFile;
