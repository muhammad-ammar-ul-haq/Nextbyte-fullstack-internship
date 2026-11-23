import type { Priority } from "../types/task";

const labels: Record<Priority, string> = { low: "Low", medium: "Medium", high: "High" };

export default function PriorityBadge({ priority }: { priority: Priority }) {
  return <span className={`badge priority-${priority}`}>{labels[priority]}</span>;
}