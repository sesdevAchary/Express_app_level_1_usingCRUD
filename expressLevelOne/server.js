import express from 'express'
import bodyParser from 'body-parser'   // for taking the incoming post reqest body

import userRoutes from './routes/user.js'

const PORT = 3001;
const app = express (); // creating an app using express
   


app.get('/', (req,res)=>{
    res.send(" hello from Homepage");
    console.log('[get route]')
})

app.use(bodyParser.json());

app.get("/api",(req,res) =>
    { 
        res.json(
        {
            "message":"hello from the api"
    })
    })
app.use('/user',userRoutes)  // specify the path and router handler


app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`)); // listening for requests from our client side,