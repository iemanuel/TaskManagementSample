import { IUser } from "./user";
import { ITask } from "./task";

export class IBoard  {
    Id:number;
    Name: number;
    User: IUser;
    Tasks: ITask[]
}
