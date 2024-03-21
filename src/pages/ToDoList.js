import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import InputForm from '../components/InputForm';
import List from '../components/List';
import TodayDate from '../components/TodayDate';

const Container = styled.div`
  margin: auto;
  width: 600px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11);

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  margin: 10px 0;
  font-size: 2.7em;
  font-weight: bold;
`;

const Subtitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-size: 1.8em;
    font-weight: 700;
    margin-top: 20px;
    margin-bottom: 10px;
  }
`;

export default function ToDoList() {
  const savedToDos = JSON.parse(localStorage.getItem('toDoData') || '[]'); // 로컬 스토리지에서 불러오기
  const [toDoData, setToDoData] = useState(savedToDos);
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
    localStorage.setItem('toDoData', JSON.stringify([...toDoData, newToDo]));
  };

  return (
    <Container>
      <Title>To-Do-List</Title>
      <InputForm value={value} setValue={setValue} onAddToDo={addToDo} />
      <Subtitle>
        <TodayDate />
        <h3>
          {completedItems}/{totalItems}
        </h3>
      </Subtitle>
      <List toDoData={toDoData} setToDoData={setToDoData} />
    </Container>
  );
}
