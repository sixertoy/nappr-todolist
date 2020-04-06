# 🍰 NAPPR TodoList

[![NPM version][npm-version-img]][npm-url] [![Build][travis-img]][travis-url]

[**Full Documentation**](https://sixertoy.github.io/nappr-todolist/#/)

## Install

```bash
yarn add @nappr/nappr-todolist
```

#### Required Dependencies

- [react-jss^10.0.4](https://www.npmjs.com/package/react-jss)

## Usage

```javascript
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v1 as uuidv1 } from 'uuid';
import NapprTodoList from '@nappr/nappr-todolist';

const ikea = require('ikea-name-generator');

function App({ items }) {
  const [tasks, updateTasks] = useState(items);
  return (
    <div className="app">
      <div style={{ height: 200 }}>
        <NapprTodoList
          onChange={(clickedTaskId, clickedtaskCheckValue) => {
            const next = tasks.map(obj => {
              if (obj.id !== clickedTaskId) return obj;
              return { ...obj, checked: clickedtaskCheckValue };
            });
            updateTasks(next);
          }}
          tasks={tasks}
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

export default App;
```

[![Edit nappr-todolist-example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/nappr-todolist-example-ie5fj?fontsize=14&hidenavigation=1&theme=dark)

[travis-url]: https://travis-ci.org/sixertoy/nappr-todolist
[travis-img]: http://img.shields.io/travis/sixertoy/nappr-todolist.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/@nappr/nappr-todolist
[npm-version-img]: http://img.shields.io/npm/v/@nappr/nappr-todolist.svg?style=flat-square
