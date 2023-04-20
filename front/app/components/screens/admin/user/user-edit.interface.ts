import { IUser } from "@/store/user/user.types";


export interface IUserEditInput extends Omit<IUser, '_id' | 'createdAt'> {}