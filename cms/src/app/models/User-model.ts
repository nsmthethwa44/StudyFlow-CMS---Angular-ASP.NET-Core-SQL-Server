export interface User{
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    role: number;
    token: string;
}

export interface CreateUser {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    password: string;
    role: string;
}

export enum UserRoles {
    Admin = 1,
    Instructor = 2,
    Student = 3
}

export interface UserRegister {
    firstName: string;
    email: string;
    password: string;
}

export interface UserLogin {
    email: string;
    password: string;
}

export interface UserResponse {
    email: string;
    token: string;
    fullName: string;
    role: string;
    expiresAt: string;
}

