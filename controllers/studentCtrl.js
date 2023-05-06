class Student {
    constructor(){

    }
    home(type){
        let data=this.getInfo(type,1)
        //this.getInfo(type ,2)
        return data+5;
    }
    userId(){
        return 12;

    }
    getInfo(type,status){
        return type;
    }
    finaleMarks(total){
        let external = this.getExternal(total)
        let internal = this.getInternal(total)
        let finalsum = external + internal+ 10;
        return finalsum;
    }
    getExternal(total){
        return total+1;

    }
     getInternal(total){
         return total-1;
    }
     dbData(){
       return new promises((resolve,reject)=>{
          setTimeout(()=>resolve(10),1000);
         })
     }
     thirdPartApi(){
        return new Promise((resolve,reject)=>{
        axios.get('http://localhost/api/article-list')
        .then(response=>{
            reject(error)
        })
     })
}
}
module.exports = Student