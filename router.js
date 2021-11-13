const express = require('express');
const router = express.Router();

const taskController = require ('./controllers/task.controller');

router.get("/", taskController.index);

router.get("/newtask", function (req,res){
    res.render("newTask")
})

router.post("/api/newtask", taskController.create);
router.get("/api/todolist", taskController.index);
router.get("/api/updatetodolist/:id", taskController.edit);
router.put("/api/updatetodolist/:id", taskController.edittask);
router.delete("/api/deletetodolist/:id", taskController.delete);

module.exports = router;