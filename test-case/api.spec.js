var chai = require('chai')
var assert =chai.assert;
var should = chai.should();
var expect = chai.expect;

var server = require('../app')

let chaiHttp = require('chat-http')
chai.use(chaiHttp)

describe('Task api',function(done){

    it('get user',function(done){
    chai.request(server)
    .get('/user')
    .end((err,response)=>{
        expect(response.status).to.be.equal(200);
        expect(response.body).to.have.all.keys('data','statusText');
        done();
    })
})
})