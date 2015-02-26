/**
 * Extend target object with source object
 * @param {Object} _target Target object
 * @param {Object} _source Source object
 * @returns {Object}
 */
module.exports = function extend(_target, _source) {
    var target = _target || {},
        source = _source || {},
        keys = Object.keys(source);

    for (var i = 0; i < keys.length; i++) {
        target[keys[i]] = source[keys[i]];
    }

    return target;
};
