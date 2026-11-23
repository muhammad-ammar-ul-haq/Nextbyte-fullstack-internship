import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Task, Priority, Status } from "../types/task";

interface Props {
  initial?: Task;
  mode: "add" | "edit";
}

export default function TaskForm({ initial, mode }: Props) {
  const navigate = useNavigate();
  const [title, setTitle] = useState(initial?.title ?? "");
  const [description, setDescription] = useState(initial?.description ?? "");
  const [dueDate, setDueDate] = useState(initial?.dueDate ?? "");
  const [priority, setPriority] = useState<Priority>(initial?.priority ?? "medium");
  const [status, setStatus] = useState<Status>(initial?.status ?? "pending");
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim()) {
      setError("Title is required.");
      return;
    }
    navigate("/tasks");
  }

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <div className="field">
        <label htmlFor="title">Title</label>
        <input id="title" value={title} onChange={(e) => { setTitle(e.target.value); setError(""); }} placeholder="Enter task title" />
        {error && <p className="error">{error}</p>}
      </div>
      <div className="field">
        <label htmlFor="description">Description</label>
        <textarea id="description" rows={4} value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter details..." />
      </div>
      <div className={mode === "edit" ? "field-row three" : "field-row"}>
        <div className="field">
          <label htmlFor="dueDate">Due date</label>
          <input id="dueDate" type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
        </div>
        <div className="field">
          <label htmlFor="priority">Priority</label>
          <select id="priority" value={priority} onChange={(e) => setPriority(e.target.value as Priority)}>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        {mode === "edit" && (
          <div className="field">
            <label htmlFor="status">Status</label>
            <select id="status" value={status} onChange={(e) => setStatus(e.target.value as Status)}>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>
          </div>
        )}
      </div>
      <div className="form-actions">
        <button type="submit" className="btn primary">{mode === "add" ? "Save task" : "Update task"}</button>
        {mode === "add" ? (
          <button type="button" className="btn secondary" onClick={() => navigate("/tasks")}>Cancel</button>
        ) : (
          <button type="button" className="btn danger" onClick={() => navigate("/tasks")}>Delete task</button>
        )}
      </div>
    </form>
  );
}