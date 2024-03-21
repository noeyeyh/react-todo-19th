import React from 'react';
import styled from 'styled-components';
import plusImg from '../assets/img/plus.svg';

const InputStyle = styled.input`
  background-color: #d9d9d9d9;
  border: none;
  outline: none;
  border-radius: 10px;
  padding: 5px 5px 5px 30px; /*텍스트와 이미지 겹침 방지를 위한 패딩 조정*/
  width: 100%;
  line-height: 20px;
  cursor: pointer;

  background-image: url('${plusImg}');
  background-position: 5px center; /*이미지 위치 조정*/
  background-repeat: no-repeat;
  background-size: 20px 20px;

  ::placeholder {
    font-size: 1px;
  }
`;

export default function InputForm({ value, setValue, onAddToDo }) {
  const handleInput = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!value.trim()) return; // 공백 입력 방지
    onAddToDo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputStyle
        type="text"
        placeholder="할 일을 입력하세요."
        value={value}
        onChange={handleInput}
      />
    </form>
  );
}
