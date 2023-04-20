import { IUser } from "@/store/user/user.types";

export interface IProfileInput extends Pick<IUser, 'email' | 'password'> {}