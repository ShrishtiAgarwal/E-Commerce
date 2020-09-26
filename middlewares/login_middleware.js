
const Customer = require( '../lib/models/Customer')

const Login = async(req,res) => {
    const email = req.body.email;
   
    const z= await Customer.findOne({where :{email:email}})
    .then(()=>{
        if(z==="true")
            next()
        else
        {
            res.json("Please Login in first")
        }
    }).catch(
        res.json({
            "data" : "null",
            "Error": {
                "error message ":"User doesn't registered"
            }
        })
    )
    
    
}


module.exports = {
    Login}