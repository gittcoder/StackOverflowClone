import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import userRoutes from './routes/users.js'

const app = express();

app.use(express.json({limit:"30mb",extended:true}))
app.use(express.urlencoded({limit:"30mb",extended:true}))
app.use(cors());

app.get('/',(req,res)=>
{
    res.send("this is stack overflow clone api!!!")
})

app.use('/user',userRoutes)

const PORT = process.env.PORT||3500


const CONNECTION_URL = "mongodb+srv://nqsfYYyUw58TEpbw:szG6sTXG5LU8sxKT@stack-overflow-clone.dxm1mbd.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>app.listen(PORT,()=>{console.log(`server running on ${PORT}`)})
).catch((err)=>{console.log(err.message)})