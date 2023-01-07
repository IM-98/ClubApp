export interface User {
    id: number;
    email: string;
    password: string;
    name: string;
    token: string;
    premium: boolean;
    student: boolean;
}