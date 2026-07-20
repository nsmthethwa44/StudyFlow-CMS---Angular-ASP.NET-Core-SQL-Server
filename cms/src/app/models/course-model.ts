export interface CreateCourse{
    title: string,
    description: string,
    thumbnailPath: string,
    price: number,
    category: string,
    level: string
}

export interface Course{
    id: number,
    title: string,
    description: string,
    thumbnailPath: string,
    price: number,
    category: string,
    level: string,
    createdAt: string,
    instructorId: number,
}