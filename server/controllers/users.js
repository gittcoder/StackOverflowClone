
import user from '../models/auth.js'

export const getAllUsers= async (req,res)=>
{
    try{
        const allUsers = await user.find();
        const allUserDetails=[]
        allUsers.forEach(users=>
            {
                allUserDetails.push({_id:users._id,name:users.name,about:users.about,tags:users.tags,joinedOn:users.joinedOn,})
            })
      res.status(200).json(allUserDetails)
        }
    catch(err)
    {
        res.status(404).json({message:err.message})
}
}

export const updateProfile = async (req,res)=>
{
    const {id:_id} =req.params;
    const {name,about,tags} = req.body;
    if(!mongoose.Types.ObjectId.isValid(_id))
    {
        return res.status(404).send("Question Unavailable!!");
    }

    try{
        const updatedProfile= await users.findByIdAndUpdate(_id,{$set:{'name':name,'about':about,'tags':tags}},{new:true})
        res.status(200).json(updatedProfile);
    }
    catch(err)
    {
        res.status(405).json({message:err.message})
    }
}