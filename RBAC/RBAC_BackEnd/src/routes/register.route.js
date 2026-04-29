const express= require("express")
const register_controller=require("../controller/users/register.controller.js")
const route=express.Router()
route.post("/",register_controller)
module.exports = route
