require('dotenv').config();

const express = require('express');

const app = express()
const PORT = 4000 || process.env.PORT;

app.get( '', (req,res) => {
    res.send("hello devs world");
})

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})