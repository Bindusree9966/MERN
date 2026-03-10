const express = require("express");
const router = express.Router();

const { createTask, getAllTasks,getTaskById,updateTask } = require("../controller/taskController");
const {protect}=require('../middleware/authmiddleware')

router.post("/create", protect,createTask);
router.get("/getTask", protect,getAllTasks);
router.get("/getTask/:id", protect,getTaskById);
router.put("/updateTask/:id",protect,updateTask)
module.exports = router;