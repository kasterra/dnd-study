import React, { useState } from "react";
import Column from "./components/Column";
import initialData from "./initial-data";
interface IData {
  tasks: {
    [key: string]: { id: string; content: string };
  };
  columns: {
    [key: string]: { id: string; title: string; taskIds: string[] };
  };
  columnOrder: string[];
}

function App() {
  const [data, setData] = useState<IData>(initialData);
  return (
    <div className="App">
      <header className="App-header">
        {data.columnOrder.map((columnId) => {
          const column = data.columns[columnId];
          const tasks = column.taskIds.map((taskId) => data.tasks[taskId]);
          return <Column column={column} tasks={tasks} key={column.id} />;
        })}
      </header>
    </div>
  );
}

export default App;
