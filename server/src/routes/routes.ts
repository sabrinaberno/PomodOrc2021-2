import { Router, Response, Request } from "express";
import TaskController from "../controllers/taskController";
import ListController from "../controllers/listController";

const router = Router();
const taskController = new TaskController();
const listController = new ListController();

//-----------------------Tasks routes--------------------

//Create tasks--------------------------------------------------
router.post("/postTask/:_id", (req: Request, res: Response) => {
  taskController.createTask(req, res);
});

//Get all tasks---------------------------------------------
router.get("/getAllTask", (req: Request, res: Response) => {
  taskController.getAllTasks(req, res);
});

//Get tasks---------------------------------------------------
router.get("/getTask/:_id", (req: Request, res: Response) => {
  taskController.getTask(req, res);
});

//Update tasks------------------------------------------------
router.put("/putTask/:_id", (req: Request, res: Response) => {
  taskController.updateTask(req, res);
});

//Delete tasks------------------------------------------------------
router.delete("/deleteTask/:_id", (req: Request, res: Response) => {
  taskController.deleteTask(req, res);
});

//-----------------------End tasks routes--------------------



//-----------------------Lists routes-----------------------------

//Create list----------------------------------------------
router.post("/postList", (req: Request, res: Response) => {
    listController.createList(req, res);
});

//Get all lists---------------------------------------------
router.get("/getAllList", (req: Request, res: Response) => {
    listController.getAllList(req, res);
});

//Get specific list-------------------------------------------
router.get("/getList/:_id", (req: Request, res: Response) => {
    listController.getList(req, res);
});

//Update list-------------------------------------------------
router.put("/putList/:_id", (req: Request, res: Response) => {
    listController.updateList(req, res);
});

//Delete list-------------------------------------------------------
router.delete("/deleteList/:_id", (req: Request, res: Response) => {
    listController.deleteList(req, res);
});


//-----------------------End lists routes-------------------------

export default router;
