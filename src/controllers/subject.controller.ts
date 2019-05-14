import { Request, Response } from 'express'
import { SubjectMongoRemoteService } from "../services/subject.mongo.remote.service";

export class SubjectController {

    subjectMongoRemoteService: SubjectMongoRemoteService;

    constructor() {
        this.subjectMongoRemoteService = new SubjectMongoRemoteService();
    }

    public async getUserSubjectListAndTaskCounter(request: Request, responce: Response) {
        try {
            const result = await this.subjectMongoRemoteService.getUserSubjectListAndTaskCounter(request.params.userId);
            responce.send(result);
        } catch (error) {
            responce.status(500).send(error);

        }
    }

    public async createSubject(request: Request, responce: Response) {
        try {
            const result = await this.subjectMongoRemoteService.createSubject(request.body);
            responce.send(result);
        } catch (error) {
            responce.status(500).send(error);

        }
    }

    public async updateSubject(request: Request, responce: Response) {
        try {
            await this.subjectMongoRemoteService.updateSubject(request.body);
            responce.status(200).send({ updated: true });
        } catch (error) {
            responce.status(500).send(error);

        }
    }

    public async deleteSubject(request: Request, responce: Response) {
        try {
            await this.subjectMongoRemoteService.deleteSubject(request.params.subjectId);
            responce.status(200).send({ deleted: true });
        } catch (error) {
            responce.status(500).send(error);

        }
    }

}