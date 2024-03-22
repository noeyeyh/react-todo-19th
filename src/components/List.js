import React from 'react';
import styled from 'styled-components';
import deleteBtn from '../assets/img/trash.svg';
import grayCheckBtn from '../assets/img/grayCheck.svg';
import greenCheckBtn from '../assets/img/greenCheck.svg';

const ToDoBlock = styled.div`
  background-color: white;
  border-radius: 10px;
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: auto;

  /* 웹킷 기반 브라우저를 위한 스타일 */
  &::-webkit-scrollbar {
    width: 5px;
  }

  /* 파이어폭스 브라우저를 위한 스타일 */
  scrollbar-width: thin;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px 10px 30px;
  position: relative;

  &::after {
    content: ''; /* 가상 요소에 내용이 없음을 명시 */
    position: absolute;
    bottom: 0;
    left: 0;
    width: calc(100% - 30px); /* 전체 너비에서 20px만큼 줄임 */
    margin-left: 30px;
    border-bottom: 1px solid #ccc;
  }
`;

const TextContainer = styled.div`
  width: 85%;
  font-size: 1.2em;
  text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};
  word-wrap: break-word;
  white-space: normal;

  @media (max-width: 768px) {
    font-size: 1em;
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
  const handleDelete = (id) => {
    let newToDoData = toDoData.filter((item) => item.id !== id);
    setToDoData(newToDoData);
  };

  // 할 일 목록의 완료 상태 변경하는 함수
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
        <ItemContainer key={item.id}>
          <TextContainer completed={item.completed}>{item.title}</TextContainer>
          <ButtonsContainer>
            <CheckButtonImg
              src={item.completed ? greenCheckBtn : grayCheckBtn}
              alt="회색 체크 버튼"
              onClick={() => handleComplete(item.id)}
            />
            <DeleteButtonImg
              src={deleteBtn}
              alt="삭제 버튼"
              onClick={() => handleDelete(item.id)}
            />
          </ButtonsContainer>
        </ItemContainer>
      ))}
    </ToDoBlock>
  );
}
