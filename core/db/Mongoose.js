"use strict";

/**
 * Application mongoose connection class.
 *
 * @access public
 * @namespace core\db\Mongoose
 *
 * @see <a href="http://mongoosejs.com/">Mongoose</a>
 * */

import mongoose from 'mongoose';
import bluebird from 'bluebird';

/**
 * @params uri Mongoose connection url e.g [ mongodb://localhost:27017/DB_NAME]
 * @return Mongoose db instance
 * */
export default (uri) => {

    mongoose.connect(uri, {useMongoClient: true});
    mongoose.Promise = bluebird;

    const db = mongoose.connection;

    db.on('error', (err) => {
        console.error(err);
    });

    db.once('open', () => {
        console.info("Connected to db %s", uri);
    });

    return db;
};

