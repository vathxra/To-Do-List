const db = require ("../models");
const Todolist = db.todolists;

exports.create = async function (req,res){
    const {task, assignee, deadline, status} = req.body;

    const newTask = await Todolist.create({task, assignee, deadline, status});
    res.status(200).redirect("/");
}

exports.index = async function (req,res){
    const list = await Todolist.findAll();

    res.status(200);

    res.render("todolist", {list : list});
}

exports.edit = async function (req,res){
    const id = req.params.id;
    const user = await Todolist.findOne({where : {id}});

    return res.render("editTask", { user });
}

exports.edittask = async function (req,res){
    const {task, assignee, deadline, status} = req.body;
    const id = req.params.id;

    let data = await Todolist.update({
        task,
        assignee,
        deadline,
        status
    },
    {where : {id}}
    );
    res.redirect("/");
}

exports.delete = async function (req,res){
    const id = req.params.id;
    const user = await Todolist.findOne({where : {id}});

    await user.destroy()

    res.status(200).redirect("/");
}