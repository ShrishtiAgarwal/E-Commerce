

const Customer =require('../lib/models/Customer')
const bcrypt = require('bcrypt')
const {to} = require('await-to-js')
const { async } = require('asyncawait')
//--------------------------password encryption  ---------- ---------------- ---------- -- --- - ---- --- --//

const passwordHash= async (password) =>{
    const saltRounds=12
    const [error,new_password]=await to(bcrypt.hash(password, saltRounds))
    
    return new_password
}


// ======================================Register customer=======================================//

const customer= async(req,res)=>{
    console.log("here again")
  
    const encryptedpassword = await passwordHash(req.body.password)
    let query1={
        name : req.body.name,
        email : req.body.email,
        password : req.body.password,
        islogin:"true",
        accessToken:encryptedpassword,
    }
    await Customer.create(query1).then(()=>{
       // Customer.create(query1)
        res.json({
            "payload" : "successfully registered"
        })
    }).catch(()=>{
        res.json({
            "data":"null",
            "error":{
                "msg":"not registered"
            }
        })
    })
}

// =======================================customer update ======================= //   

const customer_update =async(req,res) =>{
    
    const email = req.body.email;
    await Customer.update({query},{where:{email:email}}).then(()=>{
        res.json(
            { "payload" : "successfully updated"}
        )}).catch(error => {
           res.json( {"error":"logout failed"})
        })

   
   
}

// ============================================= customer login =================================
const customer_login = async(req,res) =>{

    const email = req.body.email;
    await Customer.update({islogin:"true"},{where:{email:email}}).then(()=>{
        res.json(
            { "payload" : "successfully updated"}
        )}).catch(error => {
           res.json( {"error":"logout failed"})
        })

}

module.exports ={
    customer,customer_update,customer_login
}