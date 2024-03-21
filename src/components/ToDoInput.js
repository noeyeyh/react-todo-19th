import React, { useState } from 'react';
import styled from 'styled-components';

const InputStyle = styled.input`
  background-color: #d9d9d9d9;
  border: none;
  outline: none;
  border-radius: 10px;
  padding: 5px 5px 5px 30px; /*텍스트와 이미지 겹침 방지를 위한 패딩 조정*/
  width: 345px;
  height: 20px;
  line-height: 20px;
  cursor: pointer;

  background-image: url('../assets/img/plus.svg');
  background-position: 5px center; /*이미지 위치 조정*/
  background-repeat: no-repeat;
  background-size: 20px 20px;
`;

export default function ToDoInput({ onAddTodo }) {
  const [value, setValue] = useState('');

  const handleInput = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!value.trim()) return; // 공백 입력 방지
    onAddTodo(value); // 부모 컴포넌트의 함수 호출
    setValue(''); // 입력 필드 초기화
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="할 일을 입력하세요."
        value={value}
        onChange={handleInput}
      />
    </form>
  );
}
