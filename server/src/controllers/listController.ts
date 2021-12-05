import { Request, Response } from "express";
import List from "../models/listSchema";

export default class ListController {

    //-----------------------Create list----------------------------
    async createList (req:Request, res:Response): Promise<Response>{
        try {
            const list = await List.create( req. body);
            return res.status(201).json(list);
        }   catch (error) {
            return res.status(400).json(error.message);
        }
    }
    //-----------------------End create list------------------------
    

    //-----------------------Get all lists--------------------------
    async getAllList(req: Request, res:Response): Promise<Response>{
        try {
          const list = await List.find().populate("tasks");
          return res.status(200).json(list);
        } catch (error) {
          return res.status(400).json(error.message);
        }
      }
    //-----------------------End get all lists--------------------


    //-----------------------Get specific list-------------------
    async getList(req: Request, res:Response): Promise<Response>{
        try {
           const list = await List.findById( req.params._id).populate("tasks");
           return res.status(200).json(list);
        } catch (error) {
           return res.status(400).json(error.message);
        }
    }
    //-----------------------End get specific list---------------


    
    //-----------------------Update list-------------------------------
     async updateList (req: Request, res: Response): Promise<Response>{
         try { 
             const list = await List.findOneAndUpdate({'_id': req.params._id},req.body);
             return res.status(200).json(list);
         } catch (error) {
             return res.status(400).json(error.mensage);
         }
     }
    //-----------------------End update list---------------------------


    //-----------------------Delete list-----------------------------
    async deleteList(req: Request, res: Response): Promise<Response>{
        try {
            const list = await List.findOneAndDelete({'_id': req.params._id });
            return res.status(200).json(list);
        } catch (error) {
            return res.status(400).json(error.message);
        }
    }
    //-----------------------End delete list-----------------------------

    
}
