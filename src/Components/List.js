import React, { useState } from 'react';

const List = () => {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');

  const addTask = () => {
    if (taskText) {
      setTasks([...tasks, { text: taskText, category: 'upcoming' }]);
      setTaskText('');
    }
  };

  const moveTask = (taskIndex, newCategory) => {
    const updatedTasks = [...tasks];
    updatedTasks[taskIndex].category = newCategory;
    setTasks(updatedTasks);
  };

  const renderTasks = (category) => {
    return tasks
      .filter((task) => task.category === category)
      .map((task, index) => (
        <div key={index} className="kanban-task">
          {task.text}
          {category === 'upcoming' && (
            <button onClick={() => moveTask(index, 'inProgress')}>Start</button>
          )}
          {category === 'inProgress' && (
            <button onClick={() => moveTask(index, 'done')}>Done </button>
          )}
        </div>
      ));
  };

  return (
    <div className="kanban-board">
      <h1>Task Board</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add a task"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <div className="kanban-columns">
        <div className="kanban-column">
          <h2>Upcoming</h2>
          <div className="kanban-scrollable-container">{renderTasks('upcoming')}</div>
        </div>
        <div className="kanban-column">
          <h2>In Progress</h2>
          <div className="kanban-scrollable-container">{renderTasks('inProgress')}</div>
        </div>
        <div className="kanban-column">
          <h2>Done</h2>
          <div className="kanban-scrollable-container">{renderTasks('done')}</div>
        </div>
      </div>
    </div>
  );
};

export default List;
