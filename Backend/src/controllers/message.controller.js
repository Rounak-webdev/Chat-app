import  User from "../models/user.model.js";
import Message from "../models/message.model.js";


export const getUsersForSidebar = async(requestAnimationFrame,res) => {
    try{
        const loggedInUserId = requestAnimationFrame.user._id;
        const filterredUsers = await User.find({_id: {$ne:loggedInUserId}}).select("-password");
        res.status(200).json(filteredUsers);
    }catch(error){
        console.error("Error in getUsersForSidebar: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }

};

export const getMessages = async(req,res) => {
    try{
       const {id:userToChatId } = req.params
       const myId = req.user._id;

       const messages = await Message.find({
        $or:[
            {senderId:myId, recieverId:userToChatId},
            {senderId:userToChatId, recieverId:myId}
        ]
       })

       res.status(200).json(messages);

    }catch(error){
        console.log("error getMesage controller:", erroor.message);
        res.status(500).json({error:"Internal server error" });
    }
}

export const sendMessage = async (req,res) => {
    try{
        const {text ,image } =req.body;
        const {id: receiverId } = req.params;
        const senderId = req.user._id;

        let imageUrl;

        if(image) {
            //Upload base64 image to cloudinary
            const uploadResponse = await cloudinary.uploader.upload(image);
            imageUrl = uploadResponse.secure_url;

        }

        const newMessage = new Message({
            senderId,
            receiverId,
            text,
            image: imageUrl,
        })

        await newMessage.save();

        //todo : realtime funcitionality goes here => socket.io

        res.status(201).json(newMessage);


    }catch(error){
        console.log("Error in sendMessage controlller:",error.message);
        res.status(500).json({error : "'Internal Server error"});

    }
}