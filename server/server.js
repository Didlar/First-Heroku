import express from "express";


const app = express();

app.get("/login", (req, res, next) =>{
    res.json({username: "Didrik", password: "BellaNinni2007"})
} );

app.post("/login", (req, res) => {
    res.sendStatus(401);
})

const server = app.listen(process.env.PORT || 3000, ()=>{
        console.log(`Server started at localhost:${server.address.port}`)

})