import { mockedUser } from "./user"

export const mockedPlan = {
    id: "2",
    name: "Do painting or handcrafting together",
    isDone: false,
    date: "Sat 06/11, 14:30",
    users: []
};

export const mockedPlanWithUsers = {
    ...mockedPlan,
    users: [mockedUser, mockedUser, mockedUser]
};