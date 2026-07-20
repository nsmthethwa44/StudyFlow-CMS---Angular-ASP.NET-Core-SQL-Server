export interface CreateEnrollment {
  courseId: number;
}

export interface Enrollment {
  id: number;
  courseId: number;
  title: string;
  description: string;
  thumbnailPath: string;
  pricePaid: number;
  enrolledAt: string;
}

export interface InstructorStudent {
  studentId: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  title: string;
  pricePaid: number;
  enrolledAt: string;
}