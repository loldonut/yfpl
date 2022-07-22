const Regex = require('./Regex');

/**
 * Parse your YFPL file or data to a JS Object
 *
 * @param {string} text
 * @returns {string}
 */
function parse(text) {
  const regex = Regex.Main;

  const values = text.match(regex);
  if (values == null) return '';

  const result = {};

  values.forEach((rawValue) => {
    let [name, value] = rawValue.split('- ');

    name = name.replaceAll(' ', '');

    // String
    if (Regex.Strings.test(value)) {
      if (value === '""') {
        throw new Error(`String cannot be empty\nAT: ${name}`);
      }
      result[name] = value.replaceAll('"', '');
    }
    // bool (true|false)
    else if (['true', 'false'].includes(value)) result[name] = value === 'true';
    // undefined and null
    else if (['undefined', 'null'].includes(value)) {
      if (value === 'null') result[name] = null;
      else if (value === 'undefined') result[name] = undefined;
    }
    // Number
    else if (Regex.Numbers.test(value)) {
      result[name] = parseInt(value);
    }
  });

  return result;
}

module.exports = parse;
