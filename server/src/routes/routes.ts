import { Router, Response, Request } from 'express';
import TaskController from '../controllers/taskController';

const router = Router();
const taskController = new TaskController();

router.post("/tasks", (req:Request, res:Response) => {
    taskController.createTask(req, res);
})

export default router;