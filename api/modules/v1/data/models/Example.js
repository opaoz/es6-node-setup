/**
 * This is the model class for collection "examples".
 *
 * @property String _id
 * @property String title
 * @property Date createdAt
 * @property Date updatedAt
 *
 * @access public
 * @namespace api\modules\v1\data\models\Example.js
 *
 * @copyright 2017
 * */

import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

import i18n from '../../../../../core/i18n';

const Schema = mongoose.Schema;

/**
 * Example Schema definition
 */
const ExampleSchema = new Schema({
    title: {type: String, trim: true, index: true, unique: true},
}, {versionKey: false, timestamps: true});

/**
 * Example Schema validation rules.
 * */
ExampleSchema.path('title').required(true, i18n.__('%s can\'t be blank', i18n.__('title')));

/**
 * Schema plugins
 * */
ExampleSchema.plugin(uniqueValidator, {message: i18n.__('%s already exist', '{PATH}')});

/**
 * Define Example model
 * */
const Example = mongoose.model('Example', ExampleSchema);

/**
 * @return Example model instance.
 * */
export default Example;
