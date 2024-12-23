const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const app = express();
app.use(cors({
    origin: 'http://localhost:3000'
}));
const port = 3001;

app.get('/tasks', async (req, res) => {
    try {
        const tasks = await prisma.task.findMany();
        res.json(tasks);
    } catch(err) {
        return res.status(500).json({message: "Failed to retrieve tasks"})
    }
});

app.post('/tasks', express.json(), async (req, res) => {
    const { title, color, completed } = req.body;
    const newTask = await prisma.task.create({
        data: {
            title,
            color,
            completed
        },
    });
    res.json(newTask);
});

app.put('/tasks/:id', express.json(), async (req, res) => {
    const { id } = req.params;
    const {title, color, completed} = req.body
    try {
        const updatedTask =
            await prisma.task.update({
                where: {
                    id: parseInt(id)
                },
                data: {
                    title,
                    color,
                    completed
                }
            })
        return res.status(200).json(updatedTask);
    } catch (err) {
        return res.status(500).send('Task update failed');
    }
})

app.delete('/tasks/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deletedTask = await prisma.task.delete({
            where: {
                id: parseInt(id)
            }
        })
        return res.status(200).json(deletedTask);
    } catch(err) {
        return res.status(500).json({message: "Task deletion failed"});
    }
})


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
