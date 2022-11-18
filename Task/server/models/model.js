import mongoose from 'mongoose'

const video={
    title:{
        type:String,
        required:[true,"uploading Video must have the Title"]
    },
    description:{
        type:String,
        required:true  
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
}

const videoSchema=mongoose.model('Videos',video)

export default videoSchema