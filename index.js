const express=require("express")
const mongoose=require("mongoose")
const dotEnv=require("dotenv")
const ejs=require("ejs")

const app=express()
dotEnv.config()
const PORT=process.env.PORT || 8000
app.set('view engine', 'ejs')
app.use(express.static('public'))

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("MongoDB connected Successfully")
})
.catch((error)=>{
    console.log(`${error}`)
})

app.get('/signup', (req, res)=>{
    res.render('register')
})

app.get('/login', (req, res)=>{
    res.render('login')
})

app.get('/dashboard', (req, res)=>{
    res.render('welcome')
})

app.listen(PORT,()=>{
    console.log(`Server started and running @ ${PORT}`)
})