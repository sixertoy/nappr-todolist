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
  const [tasks, updateTasks] = useState(items);
  return (
    <div className="App">
      <div style={{ height: 400 }}>
        <NapprTodoList
          tasks={tasks}
          onChange={(clickedTaskId, clickedtaskCheckValue) => {
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
