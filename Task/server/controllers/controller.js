import path from 'path'
import multer from 'multer'
import Videos from '../models/model.js'

const videoStorage = multer.diskStorage({
    destination: 'videos', // Destination to store video 
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname))
    }
});

const videoUpload = multer({
    storage: videoStorage,
    limits: {
        fileSize: 10000000   // 10000000 Bytes = 10 MB
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(mp4|MPEG-4)$/)) {     // upload only mp4 and mkv format
            return cb(new Error('Please upload a Video'))
        }
        cb(undefined, true)
    }
}).single('video')


const obj = async (req,res) => {
    videoUpload(req, res, () => {
       const video = new Videos();
    //    video.meta_data = req.file;
    video.title=req.body.title;
    video.description=req.body.description;
       video.save().then(()=>{
       res.send({message:"uploaded successfully"})
       })
     
    });
 }
const getFiles= async(req,res)=>{
    try {
        const video= await Videos.find();
        res.status(200)
        res.send(video)
    } catch (error) {
        res.send(error)
    }
}

export {obj,getFiles}