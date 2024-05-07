import File from '../models/file.js'


export const uploadImage = async(req,res)=>{
    const fileobj = {
        path: req.file.path,
        name:req.file.originalname,
    };

    try{
        const file = await File.create(fileobj);
        res.status(200).json({path:`${process.env.BASE_URL}/file${file._id}`});
    }
    catch(err){
        console.error(err.message);
        res.status(500).json({error:err.message});
    }
};