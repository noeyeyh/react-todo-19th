import React from 'react';
import styled from 'styled-components';
import deleteBtn from '../assets/img/trash.svg';
import grayCheckBtn from '../assets/img/grayCheck.svg';
import greenCheckBtn from '../assets/img/greenCheck.svg';

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
  text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};

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

export default function List({ toDoData, setToDoData }) {
  const handleClick = (id) => {
    let newToDoData = toDoData.filter((item) => item.id !== id);
    setToDoData(newToDoData);
  };

  const handleComplete = (id) => {
    let newToDoData = toDoData.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setToDoData(newToDoData);
  };

  return (
    <ToDoBlock>
      {toDoData.map((item) => (
        <ItemContainer key={item.id} completed={item.completed}>
          {item.title}
          <ButtonsContainer>
            <CheckButtonImg
              src={item.completed ? greenCheckBtn : grayCheckBtn}
              alt="회색 체크 버튼"
              onClick={() => handleComplete(item.id)}
            />
            <DeleteButtonImg
              src={deleteBtn}
              alt="삭제 버튼"
              onClick={() => handleClick(item.id)}
            />
          </ButtonsContainer>
        </ItemContainer>
      ))}
    </ToDoBlock>
  );
}
