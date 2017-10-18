/**
 * @access public
 * @namespace api\middleware\ResponseDTO
 *
 * @copyright 2016
 * */

import _ from 'lodash';

/**
 * @param res Application http response instance
 * @param httpStatus response status enumeration
 * @param [data] response data transfer object
 * @param [message] response transfer message
 * @returns {*}
 */
export default (res, httpStatus, data, message) => {
    const response = _.pickBy({
        status: httpStatus.valueOf(), name: httpStatus.key, message, data
    }, (value) => (_.isNumber(value) || !_.isNull(value)));

    return res.status(httpStatus.valueOf()).json(response);
};
