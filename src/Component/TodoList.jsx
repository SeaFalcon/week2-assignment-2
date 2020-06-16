import React from 'react';

import Empty from './Empty';
import Item from './Item';

export default function TodoList({ tasks, onClick }) {
  if (!tasks.length) {
    return <Empty />;
  }
  return (
    <ol>
      {tasks.map((task) => (
        <Item
          key={task.id}
          task={task}
          onClick={onClick}
        />
      ))}
    </ol>
  );
}
