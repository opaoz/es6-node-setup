/**
 * i18n configuration.
 *
 * @access public
 * @namespace core\i18n
 *
 * @copyright 2016
 * */

import i18n from 'i18n';
import path from 'path';
import _ from 'lodash';

import placeholder from '../placeholder';

const i18nConf = placeholder.getBySuffix('i18n');

if (!_.isEmpty(i18nConf)) {
    i18n.configure({
        locales: i18nConf.supported || [],
        defaultLocale: i18nConf.default || '',
        queryParameter: i18nConf.queryParameter || 'lang',
        autoReload: i18nConf.autoReload || true,
        directory: path.join('./resources', i18nConf.dir || 'locales')
    });
} else {
    console.info('i18n configuration not set.');
}

/**
 * @return i18n instance
 * */
export default i18n;
