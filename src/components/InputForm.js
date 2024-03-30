import { useState } from 'react';
import styled from 'styled-components';
import plusImg from '../assets/img/plus.svg';

const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

const InputStyle = styled.input`
  background-color: #d9d9d9;
  border: none;
  outline: none;
  border-radius: 10px;
  padding: 5px 5px 5px 30px; // 텍스트와 이미지 겹침 방지를 위한 패딩 조정
  width: 100%;
  line-height: 20px;
  cursor: text;
`;

const PlusImg = styled.img`
  position: absolute;
  left: 5px; // 이미지 위치 조정
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
`;

export default function InputForm({ onAddToDo }) {
  const [value, setValue] = useState('');

  //입력 필드의 입력값 상태 업데이트하는 함수
  const handleInput = (event) => {
    setValue(event.target.value);
  };

  //폼 제출 시 입력데이터 처리하는 함수
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!value.trim()) {
      alert('공백 없이 입력해주세요.');
      return;
    }
    onAddToDo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputContainer>
        <InputStyle
          type="text"
          placeholder="할 일을 입력하세요."
          value={value}
          onChange={handleInput}
        />
        <PlusImg src={plusImg} alt="추가" />
      </InputContainer>
    </form>
  );
}
