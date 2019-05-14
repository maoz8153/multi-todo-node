import request from "request-promise-native";
import { ISubject, ISubjectAndTaskCounter, ICreateSubjectInput } from "../models/subject.model";
import { MongoRemoteService } from "./mongo.remote.service";


export class SubjectMongoRemoteService extends MongoRemoteService {
    async getUserSubjectListAndTaskCounter(userId: string): Promise<ISubjectAndTaskCounter[]> {
        return await request.get(this.remoteServerBaseUrl + `users/${userId}/subjects`);
    }
    ;
    async createSubject(newSubject: ICreateSubjectInput): Promise<ISubject> {
        return await request.post(this.remoteServerBaseUrl + 'subjects', { body: newSubject, json: true });
    }
    async updateSubject(subject: ISubject): Promise<any> {
        const option = { body: subject, json: true };
        return await request.put(this.remoteServerBaseUrl +
            `subjects/${subject._id}`, option);
    }
    ;
    async deleteSubject(subject: ISubject): Promise<any> {
        return await request.delete(this.remoteServerBaseUrl + `subjects/${subject._id}`);
    }
}
