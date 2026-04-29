const express= require("express")
const getPermissions_controller=require("../controller/roleAssignment/getpermissions.controller")
const route=express.Router()
route.post("/",getPermissions_controller)
module.exports = route
