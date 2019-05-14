import { Request, Response } from 'express'
import { UserMongoRemoteService } from "../services/user.mongo.remote.service";

export class UserController {

    userMongoRemoteService: UserMongoRemoteService;

    constructor() {
        this.userMongoRemoteService = new UserMongoRemoteService();
    }


    public async getUserList(request: Request, responce: Response) {
        try {
            const result = await this.userMongoRemoteService.getUserList();
            responce.send(result);
        } catch (error) {
            responce.status(500).send(error);
        }
    }

    public async getUserById(request: Request, responce: Response) {
        try {
            const result = await this.userMongoRemoteService.getUserById(request.params.userId);
            responce.send(result);
        } catch (error) {
            responce.status(500).send(error);
        }
    }

    public async createUser(request: Request, responce: Response) {
        try {
            const result = await this.userMongoRemoteService.createUser(request.body);
            responce.send(result);
        } catch (error) {
            responce.status(500).send(error);
        }
    }

    public async updateUser(request: Request, responce: Response) {
        try {
            await this.userMongoRemoteService.updateUser(request.body);
            responce.status(200).send({ updated: true });
        } catch (error) {
            responce.status(500).send(error);
        }
    }

    public async deleteUser(request: Request, responce: Response) {
        try {
            await this.userMongoRemoteService.deleteUser(request.params.userId);
            responce.status(200).send({ deleted: true });
        } catch (error) {
            responce.status(500).send(error);
        }
    }

}