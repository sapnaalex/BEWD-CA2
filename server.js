const express = require("express");
const app = express();

app.use(express.json());

let users = [];


const PORT = 3000;

app.get("/", (req, res)=>{
    res.send("Server is live...");
});

app.post("/user", (req, res)=>{
    const {email, password} = req.body;
    if(!email || email.trim == ""){


        res.status(400).json({ error: "Email cannot be empty."});
    }
    if(!password || password.trim ==""){
        res.status(400).json({ error: "Password cannot be empty."});
    }

    const newUser ={
        email,
        password
    }
    users.push(newUser);
    res.status(201).json({message : "User created Successfully", user: newUser});
});

app.listen(PORT, ()=>{
    console.log(`Server is running at port ${PORT}`);
});
