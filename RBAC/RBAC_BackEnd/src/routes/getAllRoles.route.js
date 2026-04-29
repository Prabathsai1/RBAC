const express= require("express")
const getAllRoles_controller=require("../controller/Role/allRole.controller.js")
const route=express.Router()
route.get("/", getAllRoles_controller)
module.exports = route
