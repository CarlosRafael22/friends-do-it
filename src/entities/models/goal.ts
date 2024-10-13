import { User } from "./user";

export type Goal = {
    id: string;
    name: string;
    progress: number;
    total: number;
    isDaily?: boolean;
    dailyProgress?: boolean[];
    user: User;
};