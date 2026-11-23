import { NavLink } from "react-router-dom";

export default function Navbar() {
  const cls = ({ isActive }: { isActive: boolean }) => (isActive ? "nav-link active" : "nav-link");
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <span className="brand">Task Manager</span>
        <nav className="nav-links" aria-label="Main">
          <NavLink to="/" end className={cls}>Dashboard</NavLink>
          <NavLink to="/tasks" className={cls}>Tasks</NavLink>
          <NavLink to="/tasks/new" className={cls}>Add Task</NavLink>
        </nav>
      </div>
    </header>
  );
}
