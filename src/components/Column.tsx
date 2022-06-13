import styled from "@emotion/styled";
import Task from "./Task";

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
`;
const Title = styled.h3`
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
`;

interface IColumnProps {
  column: { id: string; title: string; taskIds: string[] };
  tasks: {
    id: string;
    content: string;
  }[];
}

const Column = ({ column, tasks }: IColumnProps) => {
  return (
    <Container>
      <Title>{column.title}</Title>
      <TaskList>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </TaskList>
    </Container>
  );
};

export default Column;
