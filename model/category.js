import mongoose from 'mongoose';
// const {ObjectId}=mongoose.Schema;
const caegorySchema =mongoose.Schema({
    name: {
        type: String,
        trim:true,
        maxLength:32,
        required: true
    }
},{timestamps:true});
module.exports =mongoose.model("Category",caegorySchema)