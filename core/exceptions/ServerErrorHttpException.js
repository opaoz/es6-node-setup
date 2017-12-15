/*
 ServerErrorHttpException represents an "Internal Server Error" HTTP exception with status code 500.
 */

/**
 * @access public
 * @namespace core\exceptions\ServerErrorHttpException
 *
 * @params message String exception message| by default Http standard message for 500
 * @params errors Array which contains error messages
 *
 * @copyright 2016
 *
 * @see <a href="http://www.checkupdown.com/status/E500.html">500 Internal server error</a>
 * */

import HttpException from '../exceptions/HttpException';
import HttpStatus from '../enumerations/HttpStatus';

class ServerErrorHttpException extends HttpException {
    constructor(errors, message = 'Internal server error.') {
        super(HttpStatus.INTERNAL_SERVER_ERROR, message, errors);
    }
}

export default ServerErrorHttpException;
