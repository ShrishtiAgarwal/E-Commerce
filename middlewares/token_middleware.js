const salt = "shrishti"
let obj1


const verify= (token,secret,req,res,next) =>{
    jwt.verify(token, secret, (err, user) => {
        if (err) {
            return res.json({"error":"Token not valid"});
        }
    
        else {
            return next();
           

        }

})
}

const middle = (req,res,next) => {
   const h= (req.headers.authorization)
    if(typeof h==='undefined')
    {
        res.json({
            "error":"Token Invalid"
        })
    }
    else {


        let g = h.split(' ')
        console.log(g[1]);

        let j = verify(g[1], salt, req, res, next)
    }

}

module.exports={middle}