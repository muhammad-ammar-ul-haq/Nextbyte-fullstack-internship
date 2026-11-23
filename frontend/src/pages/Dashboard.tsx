import { Link } from "react-router-dom";
import StatCard from "../components/StatCard";
import PriorityBadge from "../components/PriorityBadge";
import { demoTasks } from "../data/demoTasks";

export default function Dashboard() {
  const total = demoTasks.length;
  const completed = demoTasks.filter((t) => t.status === "completed").length;
  const pending = total - completed;
  const percent = total ? Math.round((completed / total) * 100) : 0;
  const recent = [...demoTasks].sort((a, b) => b.id - a.id).slice(0, 4);

  return (
    <section>
      <h1>Dashboard</h1>
      <div className="stats">
        <StatCard label="Total" value={total} />
        <StatCard label="Pending" value={pending} />
        <StatCard label="Completed" value={completed} />
      </div>

      <div className="progress-block">
        <div className="progress-head"><span>Progress</span><span>{percent}% done</span></div>
        <div className="progress" role="progressbar" aria-valuenow={percent} aria-valuemin={0} aria-valuemax={100}>
          <div className="progress-fill" style={{ width: `${percent}%` }} />
        </div>
      </div>

      <div className="section-head">
        <h2>Recent tasks</h2>
        <Link to="/tasks" className="link-btn">View all tasks</Link>
      </div>
      <ul className="recent">
        {recent.map((t) => (
          <li key={t.id}>
            <span>{t.title}</span>
            <PriorityBadge priority={t.priority} />
          </li>
        ))}
      </ul>
    </section>
  );
}