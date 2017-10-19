/**
 * ExampleController
 *
 * @access public
 * @namespace api\modules\v1\endpoint\controllers\ExamplesController
 * */

import _ from 'lodash';

import i18n from '../../../../../core/i18n';

import Example from '../../data/models/Example';
import BadRequestHttpException from '../../../../../core/exceptions/BadRequestHttpException';
import ServerErrorHttpException from '../../../../../core/exceptions/ServerErrorHttpException';
import NotFoundHttpException from '../../../../../core/exceptions/NotFoundHttpException';
import ResponseDTO from '../../../../middleware/ResponseDTO';
import HttpStatus from '../../../../../core/enumerations/HttpStatus';

export default class ExampleController {
    /**
     * @api {POST} /examples Create example
     * @apiHeaderExample {json} Headers
     *     {
     *       "Content-type": "application/json"
     *     }
     * @apiVersion 1.0.0
     * @apiName CreateExample
     * @apiGroup Examples
     *
     * @apiParam {String} title `title` of example
     *
     * @apiParamExample {json} Request
     *  {
     *      "title":"JQhW4GVjNny4eICrAeRFD7uh7vFfDoZs"
     *  }
     *
     * @apiErrorExample Response error: Bad request.
     *    HTTP/1.1 400 Bad request.
     *    {
     *      "code": 400,
     *      "message": "Bad request.",
     *    }
     *
     * @apiSuccessExample  Response success
     *     HTTP/1.1 200 Ok
     *      {
     *          "status": 200,
     *          "name": "OK",
     *          "data": {
     *              "_id": "59d3622e7ba34f54d4a83a54",
     *              "updatedAt": "2017-10-03T10:10:54.249Z",
     *              "createdAt": "2017-10-03T10:10:54.249Z",
     *              "title": "JQhW4GVjNny4eICrAeRFD7uh7vFfDoZs"
     *          }
     *      }
     * */
    actionCreateExample(req, res, next) {
        const {title} = req.body || {};

        if (_.isEmpty(title)) {
            return next(new BadRequestHttpException(i18n.__('unset title')));
        }

        const example = new Example();

        example.title = title;

        return example.save((err, example) => {
            if (err) {
                return next(new ServerErrorHttpException(err));
            }

            return new ResponseDTO(res, HttpStatus.OK, example);
        });
    }

    /**
     * @api {GET} /examples/:id Get example
     * @apiHeaderExample {json} Headers
     *     {
     *       "Content-type": "application/json"
     *     }
     * @apiVersion 1.0.0
     * @apiName GetExample
     * @apiGroup Examples
     *
     * @apiParam {String} id example's id
     *
     * @apiErrorExample Response error: Not found
     *    HTTP/1.1 404 Not found
     *    {
     *     'code': 404,
     *     'message': 'Not found.'
     *   }
     *
     * @apiSuccessExample Response success
     *      HTTP/1.1 200 OK
     *      {
     *          "status": 200,
     *          "name": "OK",
     *          "data": {
     *              "_id": "59d3622e7ba34f54d4a83a54",
     *              "updatedAt": "2017-10-03T10:10:54.249Z",
     *              "createdAt": "2017-10-03T10:10:54.249Z",
     *              "title": "JQhW4GVjNny4eICrAeRFD7uh7vFfDoZs"
     *          }
     *      }
     * */
    actionGetExample(req, res, next) {
        const {id} = req.params || {};

        return Example.findById(id, (err, example) => {
            if (err) {
                return next(err);
            } else if (_.isEmpty(example)) {
                return next(new NotFoundHttpException(i18n.__('example not found')));
            }

            return new ResponseDTO(res, HttpStatus.OK, example);
        });
    }

    /**
     * @api {PUT} /examples/:id Update example
     * @apiHeaderExample {json} Headers
     *     {
     *       "Content-type": "application/json"
     *     }
     * @apiVersion 1.0.0
     * @apiName UpdateExample
     * @apiGroup Examples
     *
     * @apiParam {String} id example's id
     * @apiParam {String} title example's title
     *
     * @apiParamExample {json} Request
     *  {
     *      "title":"JQhW4GVjNny4eICrAeRFD7uh7vFfDoZs"
     *  }
     *
     * @apiErrorExample Response error: Not found
     *    HTTP/1.1 404 Not found
     *    {
     *     'code': 404,
     *     'message': 'Not found.'
     *   }
     *
     * @apiSuccessExample Response success
     *      HTTP/1.1 200 OK
     *      {
     *          "status": 200,
     *          "name": "OK",
     *          "data": {
     *              "_id": "59d3622e7ba34f54d4a83a54",
     *              "updatedAt": "2017-10-03T10:10:54.249Z",
     *              "createdAt": "2017-10-03T10:10:54.249Z",
     *              "title": "JQhW4GVjNny4eICrAeRFD7uh7vFfDoZs"
     *          }
     *      }
     * */
    actionUpdateExample(req, res, next) {
        const {id} = req.params || {};
        const {title} = req.body || {};

        if (_.isEmpty(title)) {
            return next(new BadRequestHttpException(i18n.__('empty body')));
        }

        return Example.findById(id, (err, example) => {
            if (err) {
                return next(err);
            } else if (_.isEmpty(example)) {
                return next(new NotFoundHttpException(i18n.__('example not found')));
            }

            example.title = title;
            return example.save((err, example) => {
                if (err) {
                    return next(new ServerErrorHttpException(err));
                }

                return new ResponseDTO(res, HttpStatus.OK, example);
            });
        });
    }

    /**
     * @api {DELETE} /examples/:id Delete example
     * @apiHeaderExample {json} Headers
     *     {
     *       "Content-type": "application/json"
     *     }
     * @apiVersion 1.0.0
     * @apiName DeleteExample
     * @apiGroup Examples
     *
     * @apiParam {String} id example's id
     *
     * @apiErrorExample Response error: Not found
     *    HTTP/1.1 404 Not found
     *    {
     *     'code': 404,
     *     'message': 'Not found.'
     *   }
     *
     * @apiSuccessExample Response success
     *      HTTP/1.1 200 OK
     *      {
     *          "status": 200,
     *          "name": "OK"
     *      }
     * */
    actionDeleteExample(req, res, next) {
        const {id} = req.params || {};

        return Example.findById(id, (err, example) => {
            if (err) {
                return next(err);
            } else if (_.isEmpty(example)) {
                return next(new NotFoundHttpException(i18n.__('example not found')));
            }

            return example.remove((err) => {
                if (err) {
                    return next(new ServerErrorHttpException(err));
                }

                return new ResponseDTO(res, HttpStatus.OK);
            });
        });
    }
}
