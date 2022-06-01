/**
 * Turns your object into valid YFPL data
 *
 * @param {Object} obj
 * @returns {string|null}
 */
function stringify(obj) {
    if (obj == null) return null;
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
