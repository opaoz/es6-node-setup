/**
 * App bootstrap file.
 */

import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import _ from 'underscore';
import passport from 'passport';

import Logger from './core/log4js';
import Mongoose from './core/db/Mongoose';
import placeholder from './core/placeholder';
import Constants from './api/enumerations/Constants';

import examplesRouter from './api/modules/v1/endpoint/routes/examples';

const dbConf = placeholder.getBySuffix("mongoose");
const app = express();

app.db = new Mongoose(process.env.TEST_ENV ? dbConf.testUri : dbConf.uri);
app.logger = new Logger('app');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(passport.initialize());


app.use(path.join(Constants.API_ROUTE.valueOf(), Constants.EXAMPLE_ROUTE.valueOf()), examplesRouter.getRoutes());
/**
 Error handlers
 * */

/**
 * Catch 404 and forward to error handler
 */
app.use((req, res, next) => {
    next({status: 404, message: 'Not Found.'});
});

/**
 *
 * development error handler
 * will print stacktrace
 */
if (app.get('env') === 'development') {
    app.use((err, req, res, next) => {
        const statusCode = err.status || 500;
        const result = _.pick({
            code: statusCode,
            message: err.message,
            error: err,
            errors: err.errors
        }, (value) => (
            _.isNumber(value) || !_.isEmpty(value)
        ));

        res.status(statusCode)
            .json(result);
    });
}

/**
 * production error handler
 * no stacktraces leaked to user
 */
app.use((err, req, res, next) => {
    const statusCode = err.status || 500;
    const result = _.pick({
        code: statusCode,
        message: err.message,
        errors: err.errors
    }, (value) => (
        _.isNumber(value) || !_.isEmpty(value)
    ));

    res.status(statusCode)
        .json(result);
});

/**
 * @return express application instance
 * */
export default app;
