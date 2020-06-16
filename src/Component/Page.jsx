import React from 'react';

import TodoList from './TodoList';
import Form from './Form';

export default function Page({
  taskTitle,
  onChangeTitle,
  onClickAddTask,
  tasks,
  onClickDeleteTask,
}) {
  return (
    <div>
      <h1>To-do</h1>
      <Form
        taskTitle={taskTitle}
        onChange={onChangeTitle}
        onClick={onClickAddTask}
      />
      <TodoList
        tasks={tasks}
        onClick={onClickDeleteTask}
      />
    </div>
  );
}
