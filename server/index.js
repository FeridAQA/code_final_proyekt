import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import HeaderRouter from './src/Routes/headerRouter.js'
import userRouter from './src/Routes/userRouter.js'
import productRouter from './src/Routes/productRouter.js'
const app = express()
app.use(cors())
app.use(express.json())

const port = 3000

app.use('/header',HeaderRouter)
app.use("/user", userRouter)
app.use("/product", productRouter)


mongoose.connect('mongodb+srv://fer2004id:IKWyhSAGF5uxdzb5@cluster0.xihzsda.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log("DB connet"))
    .catch(() => console.log(" not DB connet"))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})