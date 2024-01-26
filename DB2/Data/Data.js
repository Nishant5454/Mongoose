import mongoose from "mongoose"; 
const DB_Option={ 
    user:'Nisha9t',
    pwd:'nishant93',
    dbName:'cluster',  
    authSouce: 'cluster'

}
const connect=(URL,DB_Option)=>{ 
    return mongoose.connect(URL,DB_Option).then(()=>{ 
        console.log("Setup");
    }) 
    .catch((err)=>{ 
        console.log("Eroor is in the System");
    })
} 
export default connect