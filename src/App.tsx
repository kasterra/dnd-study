import React, { useCallback, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
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
  const onDragEnd = useCallback((result: any) => {
    // TODO: reorder our column
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <DragDropContext onDragEnd={onDragEnd}>
          {data.columnOrder.map((columnId) => {
            const column = data.columns[columnId];
            const tasks = column.taskIds.map((taskId) => data.tasks[taskId]);
            return <Column column={column} tasks={tasks} key={column.id} />;
          })}
        </DragDropContext>
      </header>
    </div>
  );
}

export default App;
