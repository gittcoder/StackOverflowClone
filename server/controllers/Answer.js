import mongoose from "mongoose";

import Questions from '../models/Question.js'

export const postAnswer = async (req,res)=>{
    const {id:_id} = req.params;
    const {noOfAnswers,answerBody,userAnswered,userid} = req.body;
    if(!mongoose.Types.ObjectId.isValid(_id))
    {
        return res.status(404).send("Question Unavailable!!");

    }

    try{
        const updatedQuestion= await Questions.findIdAndUpdate(_id,{$addToSet:{'answer':({answerBody,userAnswered,userId})}})
        res.status(200).json(updatedQuestion)
    }

    catch(err)
    {
        res.send(400).json(err);
    }
}


const updateNoOfQuestion = async(_id , noOfAnswers)=>
{
    try{
        await Questions.findByIdAndUpdate(_id,{$addToSet:{'noOfAnswers':noOfAnswers}})
    }
    catch(err)
    {
        console.log(err);
    }
}

export const deleteAnswer = async (req,res)=>{
    const {id:_id} = req.params;
    const {answerId,noOfAnswers} = req.body
    if(!mongoose.Types.ObjectId.isValid(_id))
    {
        return res.status(404).send("Question Unavailable!!");
    }

    if(!mongoose.Types.ObjectId.isValid(answerId))
    {
        return res.status(404).send("Answer Unavailable!!");
    }
    
    updateNoOfQuestion(_id,noOfAnswers)

    try{
        await Questions.updateOne(
            {_id},{$pull:{'answer':{_id:answerId}}}
        )

        res.status(200).json({mwssage:"Successfully Deleted!!!"})

    }
    catch(err){
        res.status(404).json(err)
    }
}