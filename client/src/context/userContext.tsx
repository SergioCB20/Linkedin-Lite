import React, { createContext, ReactNode, useState } from 'react';
import { User } from '../models/interfaces';

interface UserContextType {
    user: User | null;
    setUser: (user: User) => void;
  }
// Crea el contexto con un valor por defecto
const UserContext = createContext<UserContextType | undefined>(undefined);

// Crea un proveedor para el contexto
export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  // Cargar el usuario de ejemplo al iniciar
  const loadExampleUser = () => {
    const exampleUser: User = {
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
      ]
    };
    setUser(exampleUser);
  };

  React.useEffect(() => {
    loadExampleUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
