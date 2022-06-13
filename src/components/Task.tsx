import styled from "@emotion/styled";

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
`;

const Task = ({
  task,
}: {
  task: {
    id: string;
    content: string;
  };
}) => {
  return <Container>{task.content}</Container>;
};

export default Task;
