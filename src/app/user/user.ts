export interface IUser {
    id: number;
    name: string;
    birthdate: Date;
    email: string;
    isAdmin: boolean
};

export const USERS: IUser[] = [
    {
        id: 1000,
        name: "Luda",
        email: "dudu@gmail.com",
        birthdate: new Date(),
        isAdmin: false
    },
    {
        id: 104,
        name: "Viktor",
        email: "fedo@gmail.com",
        birthdate: new Date(),
        isAdmin: true
    },
    {
        id: 777,
        name: "Olga",
        email: "shan@ukr.net",
        birthdate: new Date(),
        isAdmin: true
    }
]