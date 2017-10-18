/**
 * @file Router
 *
 * @author opa_oz
 * @date 03/10/2017
 */
import express from 'express';

export default class Router {
    constructor() {
        this.router = express.Router();
    }

    getRoutes() {
        return this.router;
    }
}
