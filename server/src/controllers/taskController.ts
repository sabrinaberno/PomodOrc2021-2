import { Request, Response } from "express";
import Task from "../models/taskSchema";
import List from "../models/listSchema";

export default class TaskController {

  //-----------------------Create tasks-----------------------------
  async createTask(req: Request, res: Response): Promise<Response> {
    try {
      const task = await Task.create(req.body);
      await List.findByIdAndUpdate(req.params._id, {$addToSet : {tasks: task._id}});
      return res.status(201).json(task);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }
  //-----------------------End create tasks-------------------------


  //-----------------------Get all tasks-----------------------------
  async getAllTasks(req: Request, res: Response): Promise<Response> {
    try {
      const tasks = await Task.find();
      return res.status(200).json(tasks);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }
  //-----------------------End get all tasks-------------------------


  //-----------------------Get specific task--------------------
  async getTask(req: Request, res: Response): Promise<Response>{
    try {
      const tasks = await Task.find( {'_id': req.params._id });
      return res.status(200).json(tasks);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }
  //-----------------------End get specific task----------------


  //-----------------------Update tasks-----------------------------
  async updateTask(req: Request, res: Response): Promise<Response> {
    try {
      const task = await Task.findOneAndUpdate( {'_id': req.params._id }, req.body);
      return res.status(201).json(task);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }
  //-----------------------End update tasks-------------------------


  //-----------------------Delete tasks-----------------------------
  async deleteTask(req: Request, res: Response): Promise<Response> {
    try {
      const task = await Task.findOneAndDelete( {'_id': req.params._id });
      return res.status(200).json(task);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }
  //-----------------------End delete tasks-------------------------


}
