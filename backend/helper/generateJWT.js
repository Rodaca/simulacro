import jsonwebtoken from "jsonwebtoken";

const generateJWT = (uid= '')=>{

    return new Promise ((resolve,reject)=>{
        
        const payload = {uid};

        jsonwebtoken.sign(payload,process.env.SECRET_OR_PRIVATE_KEY,{
            expiresIn : '8h'
        },(err,token)=>{
            if(err){
                console.log(err);
                reject('No se pudo generar el JWT');
            }
            else{
                resolve(token);
            }
        })
    })
}

export {
    generateJWT
}