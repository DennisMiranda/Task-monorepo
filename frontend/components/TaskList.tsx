interface TaskListProps {
  tasks: task[];
}

export default function TaskList({ tasks }: TaskListProps) {
  return (
    <ul className="w-full">
      {tasks.map((task) => (
        <li key={task.id} className="border border-gray-200 p-4 rounded">
          <div className="flex gap-2">
            <input type="checkbox" />
            <p>{task.description}</p>
          </div>
          <div className="flex gap-2">
            <button className="bg-blue-300 px-2 py-1 rounded">Editar</button>
            <button className="bg-red-400 px-2 py-1 rounded">Eliminar</button>
          </div>
        </li>
      ))}
    </ul>
  );
}
