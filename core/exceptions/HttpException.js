"use strict";

/*
 * HttpException represents an exception caused by an improper request of the end-user.
 *
 * HttpException can be differentiated via its [[statusCode]] property value which
 * keeps a standard HTTP status code (e.g. 404, 500).
 */

/**
 * @access public
 * @namespace core\exceptions\HttpException
 *
 * @params httpStatus Number|HttpStatus|String
 * @params message String exception message
 * @params errors Array which contains error messages
 *
 * @copyright 2016
 *
 * @see <a href="http://www.checkupdown.com/status/error1.html">HTTP errors</a>
 * */

import _ from 'lodash';
import HttpStatus from '../enumerations/HttpStatus';

class HttpException extends Error {
    constructor(status = HttpStatus.INTERNAL_SERVER_ERROR, message = HttpStatus.INTERNAL_SERVER_ERROR.key, errors = []) {
        super();

        this.name = 'HttpException';
        this.errors = errors;

        if (_.isNumber(status)) {
            status = HttpStatus.get(status);

            if (!_.isUndefined(status)) {
                this.status = status.valueOf();
                this.message = message || status.key;
            } else {
                console.info(`Undefined http status ${status}`);
            }
        } else if (_.isObject(status)) {
            this.status = status.valueOf();
            this.message = message || status.key;
        } else if (_.isString(status)) {
            this.message = status;
        }

        Error.captureStackTrace(this);
    }
}

export default HttpException;
