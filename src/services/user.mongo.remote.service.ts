import request from "request-promise-native";
import { IUser, ICreateUserInput } from "../models/user.model";
import { MongoRemoteService } from "./mongo.remote.service";

export class UserMongoRemoteService extends MongoRemoteService {

    async getUserList(): Promise<IUser[]> {
        return await request.get(this.remoteServerBaseUrl + 'users');
    }
    async getUserById(userId: string): Promise<IUser> {
        return await request.get(this.remoteServerBaseUrl + 'users');
    }
    async createUser(newUser: ICreateUserInput): Promise<IUser> {
        return await request.post(this.remoteServerBaseUrl + 'users', { body: newUser, json: true });
    }
    async updateUser(user: IUser): Promise<any> {
        return await request.put(this.remoteServerBaseUrl + `users/${user._id}`, { body: user, json: true });
    }
    async deleteUser(userId: string): Promise<any> {
        return await request.delete(this.remoteServerBaseUrl + `users/${userId}`);
    }
}
