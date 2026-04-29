const express= require("express")
const deleteUserFromTeam_controller=require("../controller/membership/deleteuser.controller.js")
const route=express.Router()
route.post("/",deleteUserFromTeam_controller)
module.exports = route
