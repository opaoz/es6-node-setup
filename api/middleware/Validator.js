'use strict';

/**
 * @access public
 * @namespace api\middleware\Validator
 *
 * @copyright 2016
 * */

/**
 * @param email String
 * @return boolean
 * */
function isEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\']+(\.[^<>()[\]\\.,;:\s@\']+)*)|(\'.+\'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

/**
 * @param value String
 * @return boolean
 * */
function isDate(value) {
    const re = /^\d{4}-\d{2}-\d{2}$/;
    return re.test(value);
}

/**
 * @param value String
 * @return boolean
 * */
function isYear(value) {
    const re = /^\d{4}$/;
    return re.test(value);
}

/**
 * @param id
 * @returns {boolean}
 */
function isObjectId(id) {
    const re = new RegExp('^[0-9a-fA-F]{24}$');

    return id && re.test(id.toString());
}


/**
 * @param zip String
 * @return boolean
 * */
function isZipCode(zip) {
    return /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zip || '');
}

export {
    isEmail,
    isDate,
    isYear,
    isObjectId,
    isZipCode
};