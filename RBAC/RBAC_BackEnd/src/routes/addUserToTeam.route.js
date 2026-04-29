const express= require("express")
const addUserToTeam_controller=require("../controller/membership/adduser.controller.js")
const route=express.Router()
route.post("/",addUserToTeam_controller)
module.exports = route
