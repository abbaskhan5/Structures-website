// app.js
const express = require('express');
const cors = require('cors');
require('./config'); // Connect to MongoDB
const Signup = require('./signup'); // Import Signup model

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Signup endpoint
app.post('/signup', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Create a new user instance
        const newUser = new Signup({
            name,
            email,
            password
        });

        const result = await newUser.save(); // Save to MongoDB
        res.send(result);
    } catch (error) {
        res.status(500).send({ error: "Failed to register user", details: error.message });
    }
});

app.post('/login',async (req ,res)=>{
    const {email,password}=req.body;
    const user=await Signup.findOne({email ,password});
    if(!user){
        return res.status(401).send({error:"Invalid email or password"});
    }else{
        return res.send(user);
    }

})
