import mongoose from "mongoose";

export const Connection=async(username,password)=>{
    const URL=`mongodb+srv://shaba123:shabacv33@cluster0.8elsqob.mongodb.net/test`;
    try{
        await mongoose.connect(URL,{useUnifiedTopology:true, useNewUrlParser:true})
        console.log('Database connected Successfully');
    }catch(error){
        console.log('Error while connecting with the database',error.message);
    }

}

export default Connection;