"use client";
import React from "react";

interface TaskFormProps {
  saveTask: (description: string) => void;
}

export default function TaskForm({ saveTask }: TaskFormProps) {
  const [description, setDescription] = React.useState("");

  const addTask = () => {
    saveTask(description);
    setDescription("");
  };

  return (
    <div className="w-full flex flex-col gap-2">
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Add a task"
        className="border border-gray-200 p-2 rounded"
      />
      <button
        onClick={addTask}
        disabled={!description.trim()}
        className="bg-green-200 hover:bg-green-300 p-2 rounded"
      >
        Add Task
      </button>
    </div>
  );
}
