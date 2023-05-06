var chai = require('chai')
var assert = chai.assert;

//###### ASSERT ########
describe('------Aspect check------',function(){

    let userName = 'code improve';
    let mylist = {
        item:[{
            id:1,name:'demo'
        }],
        title:'user list'


    it("check string",function(){
        assert.typeOf(userName,'string');

    })

     it("equal match",function(){
         assert.equal(userName,'code improve');

     })
     it("length match",function(){
         assert.lengthOf(mylist.item,1);
    })
})