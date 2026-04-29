const express= require("express")
const assignigRole_controller=require("../controller/roleAssignment/assigning.controller.js")
const route=express.Router()
route.post("/",assignigRole_controller)
module.exports = route
