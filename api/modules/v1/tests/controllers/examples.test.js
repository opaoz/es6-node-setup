/*eslint-disable*/
'use strict';

/**
 * Created by opa_oz on 05.07.16.
 */

import supertest from 'supertest';
import 'should';

import app from '../../../../../app';
import Example from '../../data/models/Example';

const request = supertest(app);
const prefix = '/api/v1/examples';

describe('Quests', function () {
    let _id = '';

    before((done) => {
        Example.remove({}, () => {
            request
                .post(`${prefix}`)
                .send({title: 'uniq-title'})
                .expect(200)
                .end((err, res) => {
                    _id = res.body.data._id;
                    _id.should.not.empty();
                    res.status.should.equal(200);
                    done();
                });
        });
    });

    it('should get example', (done) => {
        request
            .get(`${prefix}/${_id}`)
            .expect(200)
            .end((err, res) => {
                const {_id, title} = res.body.data;

                _id.should.not.empty();

                title.should.not.empty();
                title.should.equal('uniq-title');

                res.status.should.equal(200);
                done();
            });
    });

    it('should update example', (done) => {
        request
            .put(`${prefix}/${_id}`)
            .send({title: 'uniq-title2'})
            .expect(200)
            .end((err, res) => {
                const {_id, title} = res.body.data;

                _id.should.not.empty();

                title.should.not.empty();
                title.should.equal('uniq-title2');

                res.status.should.equal(200);
                done();
            });
    });

    it('should update example', (done) => {
        request
            .delete(`${prefix}/${_id}`)
            .expect(200)
            .end((err, res) => {
                res.status.should.equal(200);
                done();
            });
    });
});
