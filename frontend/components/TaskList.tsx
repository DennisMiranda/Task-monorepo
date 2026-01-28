"use client";
import { Task } from "@/models/task";
import { useState } from "react";

interface TaskListProps {
  tasks: Task[];
  deleteTask: (id: string) => void;
  editTask: (id: string, newDescription: string) => void;
}

export default function TaskList({
  tasks,
  deleteTask,
  editTask,
}: TaskListProps) {
  const [editingTaskId, setEditTaskId] = useState<string | null>(null);
  const [editValue, setEditValue] = useState<string>("");

  const handleEditClick = (task: Task) => {
    setEditTaskId(task.id);
    setEditValue(task.description);
  };

  const handleSaveEdit = (id: string) => {
    if (!editValue.trim()) return;

    editTask(id, editValue);
    setEditTaskId(null);
    setEditValue("");
  };

  return (
    <ul className="w-full">
      {tasks.map((task) => (
        <li key={task.id} className="border border-gray-200 p-4 rounded">
          <div className="flex gap-2">
            <input type="checkbox" />
            <p>{task.description}</p>

            {/* Input para editar */}
            {editingTaskId === task.id ? (
              <input
                type="text"
                value={editValue}
                className="border border-gray-200 p-1 rounded"
                onChange={(e) => setEditValue(e.target.value)}
              />
            ) : (
              <p>{task.description}</p>
            )}
          </div>
          <div className="flex gap-2 ml-4">
            {editingTaskId === task.id ? (
              <button
                className="bg-green-300 px-2 py-1 rounded"
                onClick={() => handleSaveEdit(task.id)}
              >
                Save edit
              </button>
            ) : (
              <button
                className="bg-blue-300 px-2 py-1 rounded"
                onClick={() => handleEditClick(task)}
              >
                Editar
              </button>
            )}

            <button
              className="bg-red-400 px-2 py-1 rounded"
              onClick={() => deleteTask(task.id)}
            >
              Eliminar
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
