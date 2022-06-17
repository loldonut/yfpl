const { writeFileSync } = require('fs');

const stringify = require('./stringify');

/**
 * Stringify the Object then write it to the output file
 *
 * @param {string} outputFilename 
 * @param {Object} data 
 */
function stringifyToFile(outputFilename, data) {
  writeFileSync(outputFilename, stringify(data));
}

module.exports = stringifyToFile;
