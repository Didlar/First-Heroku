import express from "express";


const app = express();

app.get("/login", (req, res, next) =>{
    res.json({username: "Didlar", password: "lolleboien"})
} );

app.post("/login", (req, res) => {
    res.sendStatus(401);
})

app.listen(3000)