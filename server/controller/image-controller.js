import File from "../models/file.js";

export const uploadImage = async(req, res) => {
    console.log(req);
    const fileObj = {
        path: req.file.path,
        name: req.file.originalname,
    }
    try {
        const file=await File.create(fileObj);
       // console.log(file);
        res.status(200).json({ path: `https://file-sharing-system-backend-j81a.onrender.com/file/${file._id}`});
    }
    catch (error) {
        console.log(error);
        res.status(500).json({'error':'Something went wrong'});
    }
}

export const getImage = async (req, res) => {
    try {   
        const file = await File.findById(req.params.fileId);
        
        file.downloadCount++;

        await file.save();

        res.download(file.path, file.name);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: error.message });
    }
}