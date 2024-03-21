import React, { useState } from 'react';
import styled from 'styled-components';
import greenCheckBtn from '../assets/img/greenCheck.svg';
import ToDoInput from '../components/InputForm';
import List from '../components/List';

const Container = styled.div`
  margin: auto;
  max-width: 375px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11);
`;

const Title = styled.div``;

export default function ToDoList() {
  const [toDoData, setToDoData] = useState([]);

  const addTodo = (newToDoTitle) => {
    let newToDo = {
      id: Date.now(),
      title: newToDoTitle,
      completed: false,
    };

    setToDoData((prev) => [...prev, newToDo]); // 새로운 할 일을 할 일 목록에 추가
  };

  return (
    <Container>
      <Title>
        <h1>할일 목록</h1>
      </Title>
      <ToDoInput onAddTodo={addTodo} />
      <List toDoData={toDoData} setToDoData={setToDoData} />
    </Container>
  );
}
