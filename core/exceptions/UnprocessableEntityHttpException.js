"use strict";

/*
 *  Entity error when submitting form with ajax
 */

/**
 * @access public
 * @namespace core\exceptions\UnprocessableEntityHttpException
 *
 * @params message String exception message| by default Http standard message for 404
 * @params errors Array which contains error messages
 *
 * @copyright 2016
 * */

import HttpException from '../exceptions/HttpException';
import HttpStatus from '../enumerations/HttpStatus';

export default function (errors, message) {
    return new HttpException(HttpStatus.UNPROCESSABLE_ENTITY, message || "Unprocessable Entity.", errors);
};