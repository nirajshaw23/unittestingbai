const chai = require('chai');
const chaiHttp = require('chai-http');
var sinon = require("sinon");
var chai = require('chai')
var expect = chai.expect;
var Student = require('../controllers/studentCtrl')
var studentObj = new Student();

describe('-----spay------',function(){
   it('test user function',function(){
    expect(studentObj.userId()).to.be.equal(12)
})

it('function count',function(){
    var spyObj =sinon.spy(studentOnj,'getInfo')
    studentObj.home(5);
    //expect(spyObj.calledOnce).to.be.true;
    expect(spyObj.calledOnce).to.be.true;

})
})

