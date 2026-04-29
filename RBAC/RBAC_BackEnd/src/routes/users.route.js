const express= require("express")
const users_controller=require("../controller/users/users.controller.js")
const route=express.Router()
route.get("/",users_controller)
module.exports = route
    