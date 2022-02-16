import express from "express";


const app = express();

app.get("/login", (req, res, next) =>{
    res.json({username: "Didlar", password: "lolleboien"})
} );

app.listen(3000)