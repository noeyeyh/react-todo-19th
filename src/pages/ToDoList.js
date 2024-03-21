import React, { useState } from 'react';
import styled from 'styled-components';
import InputForm from '../components/InputForm';
import List from '../components/List';
import TodayDate from '../components/TodayDate';

const Container = styled.div`
  margin: auto;
  max-width: 375px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11);
`;

const Subtitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export default function ToDoList() {
  const [toDoData, setToDoData] = useState([]);
  const [value, setValue] = useState('');
  let totalItems = toDoData.length;
  let completedItems = toDoData.filter((item) => item.completed).length;

  const addToDo = (newToDoTitle) => {
    let newToDo = {
      id: Date.now(),
      title: newToDoTitle,
      completed: false,
    };

    setToDoData((prev) => [...prev, newToDo]); // 새로운 할 일을 할 일 목록에 추가
  };

  return (
    <Container>
      <h1>할 일 목록</h1>
      <InputForm value={value} setValue={setValue} onAddToDo={addToDo} />
      <Subtitle>
        <TodayDate />
        {completedItems}/{totalItems}
      </Subtitle>
      <List toDoData={toDoData} setToDoData={setToDoData} />
    </Container>
  );
}
