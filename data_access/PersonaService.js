// const { Router } = require("express");
const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const context = new Sequelize("mysql://root@localhost:3306/pepe");


router.get("/",(req,resp)=>{
    context.query("select * from usuarios",{
        type: Sequelize.QueryTypes.SELECT
    }).then((result)=>{
        console.log(result);
        resp.json(result);    
    });
});

router.get("/:Id",(req,resp)=>{
    let idquery = req.params.Id;
    console.log(idquery);
    context.query("select * from usuarios where id = :id",{
        replacements : { id : idquery},
        type: Sequelize.QueryTypes.SELECT
    }).then((result)=>{
        console.log(result);
        resp.json(result);    
    });
});

module.exports =  router;