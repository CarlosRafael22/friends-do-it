import { type User } from "./user";

export type Plan = {
    id: string;
    name: string;
    date?: string;
    isDone: boolean;
    users: User[];
};