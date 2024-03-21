import React, { useState } from 'react';
import styled from 'styled-components';
import deleteBtn from '../assets/img/trash.svg';
import grayCheckBtn from '../assets/img/grayCheck.svg';
import greenCheckBtn from '../assets/img/greenCheck.svg';
import plusImg from '../assets/img/plus.svg';
import ToDoInput from '../components/ToDoInput';

const Container = styled.div`
  margin: auto;
  max-width: 375px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11);
`;

const ToDoBlock = styled.div`
  background-color: white;
  border-radius: 10px;
  max-width: 375px;
  height: 510px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: auto;
`;

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px 10px 30px;
  position: relative;

  &::after {
    content: ''; /* 가상 요소에 내용이 없음을 명시 */
    position: absolute; /* 상위 요소인 ItemContainer에 대해 절대 위치 설정 */
    bottom: 0; /* 하단에 위치 */
    left: 0; /* 왼쪽 시작점 */
    width: calc(100% - 30px); /* 전체 너비에서 20px만큼 줄임 */
    margin-left: 30px; /* 왼쪽 여백 설정 */
    border-bottom: 1px solid #ccc; /* 하단 테두리 스타일 */
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
`;

const DeleteButtonImg = styled.img`
  cursor: pointer;
  width: 20px;
  height: 20px;
`;

const CheckButtonImg = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-right: 7px;
`;

const Title = styled.div``;

export default function ToDoList() {
  const [toDoData, setToDoData] = useState([]);

  const handleClick = (id) => {
    let newToDoData = toDoData.filter((data) => data.id !== id);
    setToDoData(newToDoData);
  };

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
      <ToDoBlock>
        {toDoData.map((data) => (
          <ItemContainer key={data.id}>
            {data.title}
            <ButtonsContainer>
              <CheckButtonImg src={grayCheckBtn} alt="회색 체크 버튼" />
              <DeleteButtonImg
                src={deleteBtn}
                alt="삭제 버튼"
                onClick={() => handleClick(data.id)}
              />
            </ButtonsContainer>
          </ItemContainer>
        ))}
      </ToDoBlock>
    </Container>
  );
}
