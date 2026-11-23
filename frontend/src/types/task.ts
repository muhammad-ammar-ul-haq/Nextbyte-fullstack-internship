export type Priority = "low" | "medium" | "high";
export type Status = "pending" | "completed";

export interface Task {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  priority: Priority;
  status: Status;
}
