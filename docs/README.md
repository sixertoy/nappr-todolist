# 🍰 NAPPR TodoList

[![NPM version][npm-version-img]][npm-url] [![Build][travis-img]][travis-url]

<iframe src="https://codesandbox.io/embed/nappr-todolist-example-ie5fj?fontsize=12&hidenavigation=1&theme=light&hidedevtools=1" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" title="nappr-todolist-example" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin" ></iframe>

[![Edit nappr-todolist-example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/nappr-todolist-example-ie5fj?fontsize=14&hidenavigation=1&theme=dark)

## Install

```bash
yarn add https://github.com/sixertoy/napper-todolist
yarn add react-jss
```

## Sample

```javascript
import { v1 as uuidv1 } from "uuid";
import React, { useState } from "react";
import PropTypes from "prop-types";
import NapprTodoList from "@nappr/nappr-todolist";

const ikea = require("ikea-name-generator");

function App({ items }) {
  const [tasks, updateTasks] = useState(items);
  return (
    <div className="App">
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
    label: ikea.getName()
  }))
};

App.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape())
};

export default App;
```

## Props

**Required Props**

```javascript
{
  onChange: func*,
  tasks: [{
    checked: bool*,
    id: oneOf(string, number)*,
    label: string*
  }],
}
```

**Optionals Props**

```javascript
{
  completedAtBottom: boolean,
  counterPosition: oneOf('top', 'bottom', 'both'),
  id: oneOfType(boolean, string),
  *onChange: func,
  onCreate: func,
  onDelete: oneOfType(boolean, func),
  onToggleAll: (boolean, func),
  order: oneOf(false, 'desc', 'asc'),
  orderBy: oneOf('label', 'id', 'mtime', 'ctime'),
  showCompleted: boolean,
  showCounter: boolean,
  showProgress: boolean,
  *tasks: arrayOf(shape({ checked:boolean, id:string, label:string })),
  title: oneOf(string, boolean),
}
```

## Theming

```javascript
{
  backgroundHover: 'rgba(0, 0, 0, 0.15)',
  color: '#000000',
  progressRadius: 2,
  progressSize: 5,
  taskRadius: 4,
  titleFontSize: 20,
};
```

[travis-url]: https://travis-ci.org/sixertoy/nappr-todolist
[travis-img]: http://img.shields.io/travis/sixertoy/nappr-todolist.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/@nappr/nappr-todolist
[npm-version-img]: http://img.shields.io/npm/v/@nappr/nappr-todolist.svg?style=flat-square
