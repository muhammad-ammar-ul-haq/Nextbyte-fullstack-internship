import { Link } from "react-router-dom";
import type { Task } from "../types/task";
import PriorityBadge from "./PriorityBadge";
import StatusBadge from "./StatusBadge";
import { formatDate } from "../utils/date";

interface Props {
  task: Task;
  onDelete?: (id: number) => void;
}

export default function TaskRow({ task, onDelete }: Props) {
  return (
    <div className="task-row" role="row">
      <div className="cell cell-title" role="cell">
        <strong>{task.title}</strong>
        <span className="muted">{task.description}</span>
      </div>
      <div className="cell" role="cell" data-label="Priority"><PriorityBadge priority={task.priority} /></div>
      <div className="cell" role="cell" data-label="Due">{formatDate(task.dueDate)}</div>
      <div className="cell" role="cell" data-label="Status"><StatusBadge status={task.status} /></div>
      <div className="cell cell-actions" role="cell">
        <Link to={`/tasks/${task.id}/edit`} className="link-btn">Edit</Link>
        <button type="button" className="link-btn danger" onClick={() => onDelete?.(task.id)}>Delete</button>
      </div>
    </div>
  );
}