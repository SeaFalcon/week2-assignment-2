import React, { useState } from 'react';

import Page from './Page';

export default function App() {
  const [state, setState] = useState({
    newId: 1,
    tasks: [],
    taskTitle: '',
  });

  const { tasks, taskTitle, newId } = state;

  function handleChangeTitle(event) {
    setState({
      ...state,
      taskTitle: event.target.value,
    });
  }

  function handleClickAddTask() {
    if (!taskTitle) return;
    setState({
      newId: newId + 1,
      tasks: [...tasks, { id: newId, title: taskTitle }],
      taskTitle: '',
    });
  }

  function handleClickDeleteTask(task) {
    setState({
      ...state,
      tasks: tasks.filter((i) => i.id !== task.id),
    });
  }

  return (
    <Page
      taskTitle={taskTitle}
      onChangeTitle={handleChangeTitle}
      onClickAddTask={handleClickAddTask}
      tasks={tasks}
      onClickDeleteTask={handleClickDeleteTask}
    />
  );
}
