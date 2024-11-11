type UUID = string;

export interface Notification {
  id: UUID;
  message: string;
  timestamp: Date;
  isRead: boolean;
}

export interface Follower {
  id: UUID;
  followerId: UUID;
  followedId: UUID;
}

export interface Company {
  id: UUID;
  name: string;
  jobPosts: JobPost[];
  imageUrl?:string;
  workers: User[];
}

export interface JobPost {
  id: UUID;
  title: string;
  description: string;
  company: Company;
  applications: JobApplication[];
  location?: string;
  salary: number;
  datePosted: Date;
  expirationDate: Date;
}

export interface Education {
  id: UUID;
  degree: string;
  institution: string;
  startDate: string;
  endDate: string;
}

export interface Experience {
  id: UUID;
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string;
}

export enum JobApplicationStatus {
  SENDED = "SENDED",
  ACCEPTED = "ACCEPTED",
  REJECTED = "REJECTED",
  CANCELED = "CANCELED",
}

export interface JobApplication {
  id: UUID;
  applicant: User;
  company: Company;
  jobPost: JobPost;
  applicationDate: Date;
  status: JobApplicationStatus;
  coverLetter: string;
}

export interface Account {
  id: UUID;
  bannerUrl?: string;
  profilePhotoUrl?: string;
  name: string;
  email: string;
  password: string;
  description?: string;
  followers: Set<Follower>;
  following: Set<Follower>;
  notifications: Notification[];
}

export interface User extends Account {
  contactInformation: string[];
  educationList: Education[];
  experienceList: Experience[];
  company?: Company;
}
