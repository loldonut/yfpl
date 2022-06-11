/**
 * Parse your YFPL file or data to a JS Object
 *
 * @param {string} text
 * @returns {string}
 */
function parse(text) {
  const regex = /[ -~]* - (\d+|\"[ -~]*\"|true|false|null|undefined)/gi;

  const values = text.match(regex);
  if (values == null) return '';

  const result = {};

  values.forEach((rawValue) => {
    let [name, value] = rawValue.split('- ');

    name = name.replaceAll(' ', '');

    // String
    if (new RegExp('"[ -~]*"', 'gi').test(value)) {
      if (value === '""') {
        throw new Error(`String cannot be empty\nAT: ${name}`);
      }
      result[name] = value.replaceAll('"', '');
    }
    // bool (true|false)
    else if (['true', 'false'].includes(value)) result[name] = value === 'true';
    else if (['undefined', 'null'].includes(value)) {
      if (value === 'null') result[name] = null;
      else if (value === 'undefined') result[name] = undefined;
    }
    // Number
    else if (/\d*/g.test(value)) {
      result[name] = parseInt(value);
    }
  });

  return result;
}

module.exports = parse;
