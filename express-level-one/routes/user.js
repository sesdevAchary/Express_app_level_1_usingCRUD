import express from 'express'
import {v4 as uuidv4} from 'uuid' //his imports a function to generate unique IDs,

const router = express.Router(); //This creates a new router instance, which will be used to define routes related 
                                 //to user operations.


let users = []; //mock database for storing user data.

  router.get('/',(req,res)=>{  //sets up a route that responds to HTTP GET requests.
    res.send(users)
  })


  router.post('/',function(req,res){
    const user= req.body;  /*When a client sends a POST request with user data (e.g., in JSON format), the server 
                              extracts the user information from req.body.*/

      users.push({...user ,id:uuidv4()});
      res.send(`${user.first_name} has been added to the Database`);

  }
);
  export default router;