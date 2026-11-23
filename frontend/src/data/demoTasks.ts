import type { Task } from "../types/task";

export const demoTasks: Task[] = [
  { id: 1, title: "Finish assignment", description: "Complete chapter 3 exercises", dueDate: "2026-11-30", priority: "high", status: "pending" },
  { id: 2, title: "Buy groceries", description: "Milk, eggs, bread and fruit", dueDate: "2026-11-25", priority: "low", status: "completed" },
  { id: 3, title: "Team meeting", description: "Weekly sync with the project team", dueDate: "2026-11-27", priority: "medium", status: "pending" },
  { id: 4, title: "Read chapter 5", description: "Database normalization notes", dueDate: "2026-11-28", priority: "medium", status: "pending" },
  { id: 5, title: "Gym session", description: "Leg day, 45 minutes", dueDate: "2026-11-24", priority: "low", status: "completed" },
  { id: 6, title: "Submit internship report", description: "Upload Week 2 PDF and send email", dueDate: "2026-12-01", priority: "high", status: "pending" },
  { id: 7, title: "Pay electricity bill", description: "Due before the 5th of December", dueDate: "2026-12-04", priority: "high", status: "pending" },
  { id: 8, title: "Call grandparents", description: "Weekend catch-up call", dueDate: "2026-11-29", priority: "low", status: "pending" },
  { id: 9, title: "Fix login page bug", description: "Button misaligned on mobile", dueDate: "2026-11-26", priority: "medium", status: "completed" },
  { id: 10, title: "Prepare presentation", description: "10 slides for the class demo", dueDate: "2026-12-02", priority: "medium", status: "pending" },
];
