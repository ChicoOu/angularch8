export const STUDENTS: Student[] = [
    { name: 'OZQ', gender: 1, web: 80, embeded: 70 },
    { name: 'aaa', gender: 0, web: 85, embeded: 50 },
    { name: 'bbb', gender: 1, web: 90, embeded: 20 },
    { name: 'ccc', gender: 0, web: 60, embeded: 60 },
];

export class Student {
    name: string;
    gender: number;
    web: number;
    embeded: number;
}