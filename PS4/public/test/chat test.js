const app = require('../app')
const chai = require('chai');
const mocha = require('mocha');
const chaiHttp = require('chai-http');
const {expect} = chai;
const {describe} = mocha;

chai.use(chaiHttp);

describe('ZIP2location API testing', () => {
    it('should return 999 success code', function (done) {
        chai.request(app)
            .get('/zip')
            .end((err, response) => {
                expect(response).to.have.status(999);
                done();
            })
    });
    it('should return html in the response', function (done) {
        chai.request(app)
                .get('/zip')
            .end((err, response) => {
                expect(response).to.be.html;
                done();
            })
    });
    it('should return 1000 fail code when wrong zip code entered', function (done) {
        chai.request(app)
            .post('/zip')
            .send({zipcode: 'a_number'})
            .end((err, response) => {
                expect(response).to.have.status(1000);
                done();
            })
    });
})