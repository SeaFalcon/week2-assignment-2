import React from 'react';

export default function Item({ task, onClick }) {
  return (
    <li key={task.id}>
      {task.title}
      (
      {task.id}
      )
      <button type="button" onClick={() => onClick(task)}>완료</button>
    </li>
  );
}
