/*
 * ConflictHttpException represents a "Not Found" HTTP exception with status code 404.
 */

/**
 * @access public
 * @namespace core\exceptions\ConflictHttpException
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

class ConflictHttpException extends HttpException {
    constructor(errors, message = 'Conflict.') {
        super(HttpStatus.CONFLICT, message, errors);
    }
}

export default ConflictHttpException;
