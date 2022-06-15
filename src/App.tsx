import React, { useCallback, useState } from "react";
import {
  DragDropContext,
  DragStart,
  DragUpdate,
  DropResult,
} from "react-beautiful-dnd";
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

  const onDragStart = useCallback((start: DragStart) => {
    document.body.style.color = "orange";
  }, []);

  const onDragUpdate = useCallback(
    (update: DragUpdate) => {
      const { destination } = update;
      const opacity = destination
        ? destination.index / Object.keys(data.tasks).length
        : 0;
      document.body.style.backgroundColor = `rgba(153,141,217,${opacity})`;
    },
    [data.tasks]
  );

  const onDragEnd = useCallback(
    (result: DropResult) => {
      document.body.style.color = "inherit";
      document.body.style.backgroundColor = "inherit";
      const { destination, source, draggableId } = result;
      if (!destination) return;
      if (
        destination.droppableId === source.droppableId &&
        source.index === destination.index
      )
        return;

      const column = data.columns[source.droppableId];
      const newTaskIds = Array.from(column.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...column,
        taskIds: newTaskIds,
      };

      const newData = {
        ...data,
        columns: {
          ...data.columns,
          [newColumn.id]: newColumn,
        },
      };

      setData(newData);
    },
    [data]
  );

  return (
    <div className="App">
      <header className="App-header">
        <DragDropContext
          onDragStart={onDragStart}
          onDragUpdate={onDragUpdate}
          onDragEnd={onDragEnd}
        >
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
