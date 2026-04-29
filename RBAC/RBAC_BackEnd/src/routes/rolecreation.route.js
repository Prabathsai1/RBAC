const express= require("express")
const createRole_controller=require("../controller/Role/create.controller.js")
const route=express.Router()
route.post("/",createRole_controller)
module.exports = route
