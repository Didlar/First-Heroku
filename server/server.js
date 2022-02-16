import express from "express";


const app = express();

app.get("/login", (req, res, next) =>{
    res.json({username: "MariaErkul ", password: "BellaNinni2007"})
} );

app.post("/login", (req, res) => {
    res.sendStatus(401);
})

app.listen(3000)