import express from 'express'
import bodyParser from 'bodyparser'  // fro taking the incoming post reqest body

const PORT = 3000;
const app = express (); // creating an app using express


app.use(bodyParser.json());

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`)); // listening for requests from our client side,