import express from 'express'
const router = express.Router();

const users = [
    {
      first_name: 'John',
      last_name: 'Doe',
      email: 'johndoe@example.com',
    },
    {
      first_name: 'Alice',
      last_name: 'Smith',
      email: 'alicesmith@example.com',
    },
  ];

  router.get('/',(req,res)=>{  //sets up a route that responds to HTTP GET requests.
    res.send(users)
  })

  export default router;