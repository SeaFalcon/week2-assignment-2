import React from 'react';

export default function Form({ taskTitle, onChange, onClick }) {
  return (
    <p>
      <input
        type="text"
        placeholder="할 일을 입력해 주세요"
        value={taskTitle}
        onChange={onChange}
      />
      <button type="button" onClick={onClick}>추가</button>
    </p>
  );
}
