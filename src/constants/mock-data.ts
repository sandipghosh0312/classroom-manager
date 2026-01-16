import { Subject } from "@/types";

export const mockSubjects: Subject[] = [
  {
    id: 1,
    name: "Introduction to Computer Science",
    code: "CS101",
    department: "Computer Science",
    description:
      "An introductory course covering fundamental concepts of programming, algorithms, and computer systems.",
    createdAt: "2024-09-01T09:00:00Z",
  },
  {
    id: 2,
    name: "Principles of Microeconomics",
    code: "ECON201",
    department: "Economics",
    description:
      "Explores how individuals and firms make decisions under scarcity, focusing on supply, demand, and market behavior.",
    createdAt: "2024-09-05T10:30:00Z",
  },
  {
    id: 3,
    name: "Modern World History",
    code: "HIST150",
    department: "History",
    description:
      "A survey of global historical developments from the 18th century to the modern era, emphasizing social and political change.",
    createdAt: "2024-09-10T14:15:00Z",
  },
];
