/**
 * @file examples
 *
 * @author opa_oz
 * @date 10/03/2017
 */

import Router from '../../../../middleware/Router';
import ExampleController from '../controllers/ExamplesController';

class ExamplesRouter extends Router {
    /**
     * @constructor
     */
    constructor() {
        super();
        this.ctrl = new ExampleController();

        this.router
            .get('/:id', this.ctrl.actionGetExample)
            .post('/', this.ctrl.actionCreateExample)
            .put('/:id', this.ctrl.actionUpdateExample)
            .delete('/:id', this.ctrl.actionDeleteExample);
    }
}

export default new ExamplesRouter();
