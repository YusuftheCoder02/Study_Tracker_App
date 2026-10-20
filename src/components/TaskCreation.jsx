import { useState } from "react";
import "./TaskCreation.css";

function TaskForm({ onAddTask }) {
    const [title, setTitle] = useState("");
    const [error, setError] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        const trimmedTitle = title.trim();
        if (!trimmedTitle) {
            setError("Enter a task title before adding a task.");
            return;
        }

        onAddTask(trimmedTitle);
        setTitle("");
        setError("");
    }

    return (
        <form className="task-creation__form" onSubmit={handleSubmit}>
            <label className="task-creation__label" htmlFor="new-task-title">
                Task title
            </label>
            <div className="task-creation__input-row">
                <input
                    id="new-task-title"
                    className="task-creation__input"
                    type="text"
                    value={title}
                    onChange={(event) => {
                        setTitle(event.target.value);
                        if (error) setError("");
                    }}
                    aria-invalid={Boolean(error)}
                    aria-describedby={error ? "new-task-error" : undefined}
                    placeholder="e.g. Review lecture notes"
                />
                <button className="task-creation__button" type="submit">
                    Add task
                </button>
            </div>
            {error && (
                <p className="task-creation__error" id="new-task-error" role="alert">
                    {error}
                </p>
            )}
        </form>
    );
}

function TaskList({ tasks }) {
    if (tasks.length === 0) {
        return <p className="task-creation__empty">No tasks yet. Add one above.</p>;
    }

    return (
        <ul className="task-creation__list">
            {tasks.map((task) => (
                <li className="task-creation__item" key={task.id}>
                    {task.title}
                </li>
            ))}
        </ul>
    );
}

export default function TaskCreation() {
    const [tasks, setTasks] = useState([]);

    function addTask(title) {
        setTasks((currentTasks) => [
            ...currentTasks,
            { id: crypto.randomUUID(), title },
        ]);
    }

    return (
        <section className="task-creation" aria-labelledby="task-creation-heading">
            <h1 className="task-creation__heading" id="task-creation-heading">
                Tasks
            </h1>
            <TaskForm onAddTask={addTask} />
            <TaskList tasks={tasks} />
        </section>
    );
}
