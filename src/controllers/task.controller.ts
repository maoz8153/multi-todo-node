import { Request, Response } from 'express'
import { TaskMongoRemoteService } from "../services/task.mongo.remote.service";

export class TaskController {

    taskMongoRemoteService: TaskMongoRemoteService;

    constructor() {
        this.taskMongoRemoteService = new TaskMongoRemoteService();
    }

    public async getTaskListBySubject(request: Request, responce: Response) {
        try {
            const result = await this.taskMongoRemoteService.getTaskListBySubject(request.params.subjectId);
            responce.send(result);
        } catch (error) {
            responce.status(500).send(error);

        }
    }

    public async createTask(request: Request, responce: Response) {
        try {
            const result = await this.taskMongoRemoteService.createTask(request.body);
            responce.send(result);
        } catch (error) {
            responce.status(500).send(error);

        }
    }

    public async updateTask(request: Request, responce: Response) {
        try {
            await this.taskMongoRemoteService.updateTask(request.body);
            responce.status(200).send({ updated: true });
        } catch (error) {
            responce.status(500).send(error);

        }
    }

    public async deleteTask(request: Request, responce: Response) {
        try {
            await this.taskMongoRemoteService.deleteTask(request.params.tasksId);
            responce.status(200).send({ deleted: true });
        } catch (error) {
            responce.status(500).send(error);

        }
    }
}