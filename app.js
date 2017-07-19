/**
 * App bootstrap file.
 */

import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import _ from 'underscore';
import passport from 'passport';

import Logger from './core/log4js';
import bot from './api/middleware/HRBot';

const app = express();

app.logger = new Logger('app');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(passport.initialize());

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

        bot.sendMessage('Dev-server error: ', JSON.stringify({statusCode, result}));
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
    bot.sendMessage('Server error: ', JSON.stringify({statusCode, result}));
});

/**
 * @return express application instance
 * */
export default app;
