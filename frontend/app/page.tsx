"use client";
import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";
import { useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState<task[]>([
    { id: "1", description: "Task 1", completed: false },
    { id: "2", description: "Task 2", completed: false },
    { id: "3", description: "Task 3", completed: false },
  ]);

  const saveTask = (description: string) => {
    setTasks([
      ...tasks,
      { id: (tasks.length + 1).toString(), description, completed: false },
    ]);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-2xl font-bold py-2">Tasks</h1>
        <TaskForm saveTask={saveTask} />
        <div className="w-full">
          <h2 className="text-lg font-semibold py-2">Tasks List</h2>
          <TaskList tasks={tasks} />
        </div>
      </main>
    </div>
  );
}
