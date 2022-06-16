import styled from "@emotion/styled";
import React, { useCallback, useState } from "react";
import { DragDropContext, DragStart, DropResult } from "react-beautiful-dnd";
import Column from "./components/Column";
import initialData from "./initial-data";

const Container = styled.div`
  display: flex;
`;
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
  const [homeIndex, setHomeIndex] = useState<number | null>(null);

  const onDragStart = useCallback((start: DragStart) => {
    const newHomeIndex = data.columnOrder.indexOf(start.source.droppableId);
    setHomeIndex(newHomeIndex);
  }, []);

  const onDragEnd = useCallback(
    (result: DropResult) => {
      setHomeIndex(null);

      const { destination, source, draggableId } = result;
      if (!destination) return;
      if (
        destination.droppableId === source.droppableId &&
        source.index === destination.index
      )
        return;

      const startColumn = data.columns[source.droppableId];
      const finishColumn = data.columns[destination.droppableId];

      if (startColumn === finishColumn) {
        const newTaskIds = Array.from(startColumn.taskIds);
        newTaskIds.splice(source.index, 1);
        newTaskIds.splice(destination.index, 0, draggableId);

        const newColumn = {
          ...startColumn,
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
      } else {
        const startTaskIds = Array.from(startColumn.taskIds);
        startTaskIds.splice(source.index, 1);
        const newStartColumn = {
          ...startColumn,
          taskIds: startTaskIds,
        };

        const finishTaskIds = Array.from(finishColumn.taskIds);
        finishTaskIds.splice(destination.index, 0, draggableId);
        const newFinishColumn = {
          ...finishColumn,
          taskIds: finishTaskIds,
        };

        const newData = {
          ...data,
          columns: {
            ...data.columns,
            [newStartColumn.id]: newStartColumn,
            [newFinishColumn.id]: newFinishColumn,
          },
        };

        setData(newData);
      }
    },
    [data]
  );

  return (
    <div className="App">
      <header className="App-header">
        <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
          <Container>
            {data.columnOrder.map((columnId, index) => {
              const column = data.columns[columnId];
              const tasks = column.taskIds.map((taskId) => data.tasks[taskId]);

              const isDropDisabled = homeIndex && index < homeIndex;

              return (
                <Column
                  column={column}
                  tasks={tasks}
                  key={column.id}
                  isDropDisabled={!!isDropDisabled}
                />
              );
            })}
          </Container>
        </DragDropContext>
      </header>
    </div>
  );
}

export default App;
