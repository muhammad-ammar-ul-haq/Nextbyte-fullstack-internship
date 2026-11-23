import TaskForm from "../components/TaskForm";

export default function AddTask() {
  return (
    <section className="form-page">
      <h1>Add task</h1>
      <TaskForm mode="add" />
    </section>
  );
}