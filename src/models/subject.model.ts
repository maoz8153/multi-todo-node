export class Subject {
    constructor(_id: string, title: string, fkUserId: string) { }
}

export interface ICreateSubjectInput {
    title: string;
    fkUserId: string;
}

export interface ISubject extends ICreateSubjectInput {
    _id: string;
}

export interface ISubjectAndTaskCounter extends ISubject {
    taskCounter: number;
}