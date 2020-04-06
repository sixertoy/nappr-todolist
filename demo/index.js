/* eslint
  react/jsx-filename-extension: 0
*/
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { v1 as uuidv1 } from 'uuid';

import NapprTodoList from '../src';

const ikea = require('ikea-name-generator');

function App({ items }) {
  const listId = uuidv1();
  const [tasks, updateTasks] = useState(items);
  return (
    <div className="app">
      <div style={{ height: 400 }}>
        <NapprTodoList
          showCounter
          showCompleted
          showProgress
          order="desc"
          orderBy="label"
          title="NAPPR TodoList"
          counterPosition="both"
          completedAtBottom={false}
          id={listId}
          tasks={tasks}
          onToggleAll={checkedValue => {
            const next = tasks.map(obj => ({ ...obj, checked: checkedValue }));
            updateTasks(next);
          }}
          onDelete={(clickedTaskId /* ,listId */) => {
            const next = tasks.filter(obj => obj.id !== clickedTaskId);
            updateTasks(next);
          }}
          onCreate={
            (/* listId */) => {
              const newTask = {
                checked: false,
                id: uuidv1(),
                label: ikea.getName(),
              };
              const next = [...tasks, newTask];
              updateTasks(next);
            }
          }
          onChange={(clickedTaskId, clickedtaskCheckValue /* ,listId */) => {
            const next = tasks.map(obj => {
              if (obj.id !== clickedTaskId) return obj;
              return { ...obj, checked: clickedtaskCheckValue };
            });
            updateTasks(next);
          }}
        />
      </div>
    </div>
  );
}

App.defaultProps = {
  items: [...Array(10).keys()].map(() => ({
    checked: false,
    id: uuidv1(),
    label: ikea.getName(),
  })),
};

App.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape()),
};

ReactDOM.render(<App />, document.getElementById('root'));
