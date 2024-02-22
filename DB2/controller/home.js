import UserModel from "../models/cluseter.js"; 
class userController{ 
    static homepage=(req,res)=>{ 
        res.render('home')
    } 
    static loginpage=(req,res)=>{ 
        res.render('login')
    } 
    static regpage=(req,res)=>{ 
        res.render('reg')
    } 
    static UserDoc=async (req,res)=>{ 
        try{ 
            const doc = new UserModel({  
                name:req.body.name,
                email:req.body.email,
                password:req.body.password,
            })
            await doc.save(); 
            res.redirect('/login')
        }
            catch(error){  
                console.log(error);

            }
        }
    }

export default userController