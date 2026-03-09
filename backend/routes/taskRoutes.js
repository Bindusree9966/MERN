const express = require("express");
const router = express.Router();
const {createTask}=require('../controller/taskController')
const {protect}=require('../middleware/authmiddleware')
router.post('/create',protect,createTask)
module.exports = router;