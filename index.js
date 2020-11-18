const express = require("express");
const app = express();
const usuarios = require("./data_access/PersonaService.js")
const bodyParcer =  require("body-parser");
const jwt = require("jsonwebtoken");

app.use(bodyParcer.json());

app.use("/usuarios",usuarios);

app.get("/personas",(req,resp)=>{
    resp.send("holii");
});

app.get("/login",(req,resp)=>{

    const {usu,pass} = req.body;
    console.log(usu);
    console.log(pass);
    resp.json(jwt.sign({
        usuario:"brian",
        perfil: "ete sech"
    },"el pepe"));
})

app.post("/token",(req, resp)=>{
    console.log(req.header.authorization);
    resp.json(
        jwt.verify(req.headers.authorization.split(" ")[1],"el pepe")
        
    );
});


//si no esta ultimo se app se creashea.
//probar guardando 2 veces
app.listen(3000,()=>{
    console.log("server iniciado");
});


