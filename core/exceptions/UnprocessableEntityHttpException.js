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

class UnprocessableEntityHttpException extends HttpException {
    constructor(errors, message = 'Unprocessable Entity.') {
        super(HttpStatus.UNPROCESSABLE_ENTITY, message, errors);
    }
}

export default UnprocessableEntityHttpException;
