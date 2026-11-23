import { useState } from "react";
import { Link } from "react-router-dom";
import TaskRow from "../components/TaskRow";
import { demoTasks } from "../data/demoTasks";

export default function TaskList() {
  const [tasks, setTasks] = useState(demoTasks);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [priority, setPriority] = useState("all");

  const visible = tasks.filter(
    (t) =>
      t.title.toLowerCase().includes(search.toLowerCase()) &&
      (status === "all" || t.status === status) &&
      (priority === "all" || t.priority === priority)
  );

  return (
    <section>
      <div className="section-head">
        <h1>Tasks</h1>
        <Link to="/tasks/new" className="btn primary">Add task</Link>
      </div>

      <div className="filters">
        <input type="search" placeholder="Search tasks..." aria-label="Search tasks" value={search} onChange={(e) => setSearch(e.target.value)} />
        <select aria-label="Filter by status" value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="all">All statuses</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
        <select aria-label="Filter by priority" value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="all">All priorities</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>

      <div className="task-table" role="table" aria-label="Tasks">
        <div className="task-head" role="row">
          <div role="columnheader">Title</div>
          <div role="columnheader">Priority</div>
          <div role="columnheader">Due</div>
          <div role="columnheader">Status</div>
          <div role="columnheader">Actions</div>
        </div>
        {visible.length === 0 ? (
          <p className="empty">No tasks match your filters. Clear the search or add a new task.</p>
        ) : (
          visible.map((t) => (
            <TaskRow key={t.id} task={t} onDelete={(id) => setTasks((prev) => prev.filter((x) => x.id !== id))} />
          ))
        )}
      </div>
    </section>
  );
}