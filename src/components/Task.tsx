import styled from "@emotion/styled";
import React from "react";
import { Draggable } from "react-beautiful-dnd";

interface IContainer {
  isDragDisabled: boolean;
  isDragging: boolean;
}

const Container = styled.div<IContainer>`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  transition: background-color 0.2s ease;
  background-color: ${(props) =>
    props.isDragDisabled
      ? "lightgrey"
      : props.isDragging
      ? "lightgreen"
      : "white"};
`;

interface ITaskProps {
  task: {
    id: string;
    content: string;
  };
  index: number;
}

const Task = ({ task, index }: ITaskProps) => {
  const isDragDisabled = task.id === "task-1";
  return (
    <Draggable
      draggableId={task.id}
      index={index}
      isDragDisabled={isDragDisabled}
    >
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
          isDragDisabled={isDragDisabled}
        >
          {task.content}
        </Container>
      )}
    </Draggable>
  );
};

export default React.memo(Task);
