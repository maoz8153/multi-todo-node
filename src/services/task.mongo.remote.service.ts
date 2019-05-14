import request from "request-promise-native";
import { ITask, ICreateTaskInput } from "../models/task.model";
import { MongoRemoteService } from "./mongo.remote.service";

export class TaskMongoRemoteService extends MongoRemoteService {
    async getTaskListBySubject(subjectId: string): Promise<ITask[]> {
        return await request.get(this.remoteServerBaseUrl + `subjects/${subjectId}/tasks`);
    }
    ;
    async createTask(newTask: ICreateTaskInput): Promise<ITask> {
        return await request.post(this.remoteServerBaseUrl + `tasks`, { body: newTask, json: true });
    }
    ;
    async updateTask(task: ITask): Promise<any> {
        const option = { body: task, json: true };
        return await request.put(this.remoteServerBaseUrl +
            `tasks/${task._id}`, option);
    }
    ;
    async deleteTask(taskId: string): Promise<any> {
        return await request.delete(this.remoteServerBaseUrl + `tasks/${taskId}`);
    }
}
