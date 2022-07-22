// All the Regex used is in here
module.exports = {
  Main: new RegExp('.+ - (\\d+|\\".*\\"|true|false|null|undefined)', 'gi'),
  Strings: new RegExp('".*"', 'gi'),
  Numbers: new RegExp('\\d*', 'g'),
};
