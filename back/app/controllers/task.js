const { Task } = require('../models');

const taskController = {

    listTasks: async function (req, res) {
        // Récupérer la liste des taches
        try {
            const tasks = await Task.findAll();
        // Renvoyer la liste des taches en json
            res.json(tasks);

        } catch (err) {
            console.trace(err);
            res.status(500).json(err.toString());
        }
    },

    create:async (req,res)=>{
        try {
            const { name } = req.body;
            console.log(req.body);
            // Test des propriétés
            if (!name) throw new Error("name can't be empty");
            let newTask = await Task.create(
                {name}
            );
            res.json(newTask);
        } catch (err) {
            // GESTION D'ERREUR
            console.trace(err);
            res.status(500).json(err.toString());
        }
    },

    update: async (req,res)=>{
        try {
            if (!Number(req.params.id)) throw new Error("id is required and is a number");

            const task = await Task.findByPk(req.params.id);

            if (!task) {
                return res.status(404).json({ status: 'task not found' });
            }
            const {name }  = req.body;
            console.log(name)
            if (name) task.name = name;
            await task.save();
            res.json(task);
        } catch (err) {
            // GESTION D'ERREUR
            console.trace(err);
            res.status(500).json(err.toString());
        }
    },

    delete: async(req,res)=>{
        try {
            if (!Number(req.params.id)) throw new Error("id is required and is a number");
            const task = await Task.findByPk(req.params.id);
            await task.destroy();
            
            res.status(204).json();

        } catch (err) {
            // GESTION D'ERREUR
            console.trace(err);
            res.status(500).json(err.toString());
        }
    },
};

module.exports = taskController;
