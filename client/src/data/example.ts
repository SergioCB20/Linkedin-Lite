import { Company, User, JobApplication, JobApplicationStatus, JobPost } from "../models/interfaces";
// Crear la compañía
export const exampleCompany: Company = {
    id: "uuid-company-5678",
    name: "Tech Corp",
    jobPosts: [],
    workers: []
  };
  
  // Crear el usuario solicitante
export const exampleApplicant: User = {
    id: "uuid-user-1234",
    name: "Alice Doe",
    email: "alice@example.com",
    password: "securePassword123",
    followers: new Set(),
    following: new Set(),
    notifications: [
      {
        id: "uuid-notif-1",
        message: "Your application has been received.",
        timestamp: new Date(),
        isRead: false
      }
    ],
    contactInformation: ["alice@example.com", "+123456789"],
    educationList: [
      {
        id: "uuid-edu-1",
        degree: "B.Sc. in Computer Science",
        institution: "Example University",
        startDate: "2015-09-01",
        endDate: "2019-06-01"
      }
    ],
    experienceList: [
      {
        id: "uuid-exp-1",
        jobTitle: "Frontend Developer",
        company: "Startup XYZ",
        startDate: "2019-07-01",
        endDate: "2021-08-01"
      }
    ],
    company: exampleCompany
  };
  
  // Crear una solicitud de empleo (Job Application)
export const exampleJobApplication: JobApplication = {
    id: "uuid-application-1",
    applicant: exampleApplicant,
    company: exampleCompany,
    jobPost: {} as JobPost, // Se inicializa temporalmente para evitar la referencia circular
    applicationDate: new Date("2023-10-01"),
    status: JobApplicationStatus.SENDED,
    coverLetter: "I'm excited about this opportunity and believe my skills align with the requirements."
  };
  
  // Crear la publicación de empleo (Job Post)
export const exampleJobPost: JobPost = {
    id: "uuid-jobpost-1234",
    title: "Frontend Developer",
    description: "Responsible for developing and maintaining user interfaces.",
    company: exampleCompany,
    applications: [exampleJobApplication],
    location: "Remote",
    salary: 60000,
    datePosted: new Date("2023-09-15"),
    expirationDate: new Date("2023-12-15")
  };
  
export const anotherExampleJobPost: JobPost = {
    id: "uuid-jobpost-5678",
    title: "Backend Developer",
    description: "Looking for a skilled backend developer to manage server-side logic.",
    company: {
      id: "uuid-company-9101",
      name: "Innovatech Solutions",
      jobPosts: [],
      workers: []
    },
    applications: [],
    location: "San Miguel",
    salary: 70000,
    datePosted: new Date("2023-10-01"),
    expirationDate: new Date("2024-01-01")
  };

  // Actualizar la referencia circular en el `jobPost` de la solicitud de empleo
  exampleJobApplication.jobPost = exampleJobPost;
  