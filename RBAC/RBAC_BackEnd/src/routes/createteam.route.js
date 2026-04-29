const express= require("express")
const createTeam_controller=require("../controller/teams/create.controller.js")
const route=express.Router()
route.post("/",createTeam_controller)
module.exports = route
