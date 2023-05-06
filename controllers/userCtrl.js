// const userList =(req,resp)=>{
//     resp.send("hellow1")
// }
// module.exports={
//     userList
// }

const userList = (req,res)=>{
    let data={
        list : 'hello'
    }
    resp.status(200).json({statusText : 'Success' ,data})

}
const newsData=()=>{
    return new Promise((resolve,reject)=>{
        resolve({otp:9000})
    })
}
module.exports={
    userList,
    newsData
    


}
