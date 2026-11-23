import type { Status } from "../types/task";

export default function StatusBadge({ status }: { status: Status }) {
  return (
    <span className={`badge status-${status}`}>
      {status === "completed" ? "Completed" : "Pending"}
    </span>
  );
}