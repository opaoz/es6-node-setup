"use strict";

/*
 * NotFoundHttpException represents a "Not Found" HTTP exception with status code 404.
 */

/**
 * @access public
 * @namespace core\exceptions\NotFoundHttpException
 *
 * @params message String exception message| by default Http standard message for 404
 * @params errors Array which contains error messages
 *
 * @copyright 2016
 *
 * @see <a href="http://www.checkupdown.com/status/E404.html">404 Not found</a>
 * */

import HttpException from '../exceptions/HttpException';
import HttpStatus from '../enumerations/HttpStatus';

export default function (errors, message) {
    return new HttpException(HttpStatus.NOT_FOUND, message || "Not found.", errors);
};