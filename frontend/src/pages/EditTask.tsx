import { Link, useParams } from "react-router-dom";
import TaskForm from "../components/TaskForm";
import { demoTasks } from "../data/demoTasks";

export default function EditTask() {
  const { id } = useParams();
  const task = demoTasks.find((t) => t.id === Number(id));

  if (!task) {
    return (
      <section className="form-page">
        <h1>Task not found</h1>
        <p className="muted">This task does not exist. <Link to="/tasks" className="link-btn">Back to tasks</Link></p>
      </section>
    );
  }

  return (
    <section className="form-page">
      <h1>Edit task</h1>
      <TaskForm mode="edit" initial={task} />
    </section>
  );
}