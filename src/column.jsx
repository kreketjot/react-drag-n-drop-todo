import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import Task from './task';

const Container = styled.div`
  marging: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
`;
const Title = styled.h3`
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
`;

const Column = (props) => (
  <Container>
    <Title>{props.column.title}</Title>
    <Droppable droppableId={props.column.id}>
      {(provided) => (
        <TaskList
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {props.tasks.map((task, index) => (
            <Task key={task.id} task={task} index={index} />
          ))}
          {provided.placeholder}
        </TaskList>
      )}
    </Droppable>
  </Container>
);

export default Column;