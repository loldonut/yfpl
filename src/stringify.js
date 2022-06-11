/**
 * Turns your object into valid YFPL data
 *
 * @param {Object} obj
 * @returns {string}
 */
function stringify(obj) {
    if (obj == null) return '';
    const datas = [];
    for (const key in obj) {
        datas.push(
            typeof obj[key] === 'string'
                ? `${key} - "${obj[key]}"`
                : `${key} - ${obj[key]}`
        );
    }

    return datas.join('\n');
}

module.exports = stringify;
