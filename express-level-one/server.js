import express from 'express'
import bodyparser from 'body-parser'

import router from './routes/user'
import userRouter from './routes/user'
const app=express(); // n instance of an Express application is created and stored in the app variable. This instance will handle routing and middleware.

const PORT = 3005;



app.get('/', function (req, res) {
    res.send('Hello World');
 });

 app.get("/api",(req,res) =>
    { 
        res.json(
        {
            "message":"hello from the api"
    })
    })




app.use('/users',userRouter)
 app.use(bodyparser.json());


app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));