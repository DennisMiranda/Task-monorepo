"use client";
import TaskList from "@/components/TaskList";
import { useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState<task[]>([
    { id: "1", description: "Task 1", completed: false },
    { id: "2", description: "Task 2", completed: false },
    { id: "3", description: "Task 3", completed: false },
  ]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1>Tasks</h1>
        <TaskList tasks={tasks} />
      </main>
    </div>
  );
}
