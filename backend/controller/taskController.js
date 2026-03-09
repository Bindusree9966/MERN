const Task = require("../models/Task");

// Create a new task    
exports.createTask = async (req, res) => {
    try {
        const task = await Task.create({
            title:req.body.title,
            description:req.body.description,
            status:req.body.status,
            user:req.user.id
        })
        res.status(201).json({msg:'task created'},task);
    } catch (error) {
        console.log(error);
    }
}