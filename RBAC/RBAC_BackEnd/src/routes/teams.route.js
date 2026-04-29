const express= require("express")
const teams_controller=require("../controller/teams/teams.controller.js")
const route=express.Router()
route.get("/",teams_controller)
module.exports = route
