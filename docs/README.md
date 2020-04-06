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
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { v1 as uuidv1 } from 'uuid';
import NapprTodoList from '@nappr/nappr-todolist';

const ikea = require('ikea-name-generator');

const App = ({ items }) => {
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
          onToggleAll={(checkedValue /* ,listId */) => {
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
};

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

## Props

**Required Props**

### `tasks*: array`

An array of task objects

```javascript
<NapprTodoList
  tasks={[
    {
      label: string,
      id: string|number,
      checked: bool,
    },
    ...
  ]}
/>
```

### `onChange*: func`

Callback function triggered when the checked value of the list has changed

```javascript
<NapprTodoList
  onChange={(
    clickedTaskId: string | number,
    clickedtaskCheckValue: boolean,
    listId?: string | number
  ) => {
    // state update
  }}
/>
```

**Optionals Props**

### `completedAtBottom?: boolean`

Show completed tasks at the bottom of the list

```javascript
<NapprTodoList completedAtBottom={true} />
```

### `counterPosition?: string`

Show completed tasks at the bottom of the list
Possible values: `top`, `bottom`, `both`

```javascript
<NapprTodoList counterPosition={'bottom'} />
```

### `id?: string|number`

An identifier for the tasks list, this value will be returned as last arguments of each callback methods `onChange`, `onCreate`, `onToggleAll`, `onDelete`

```javascript
<NapprTodoList id={uuidv1()} />
```

### `onCreate?: func`

Callback function showing a triggering button to add tasks to the list

```javascript
<NapprTodoList
  onCreate={(listId?: string | number) => {
    // state update
  }}
/>
```

### `onDelete?: func`

Callback function showing a triggering button to remove tasks from the list

```javascript
<NapprTodoList
  onDelete={(taskId?: string | number) => {
    // state update
  }}
/>
```

### `onToggleAll?: func`

Callback function showing a triggering button to check/uncheck all tasks at once

```javascript
<NapprTodoList
  onToggleAll={(checkedValue*: bool, taskId?: string|number) => {
    // state update
  }}
/>
```

### `order?: bool|string`

Ordering the list descending or ascending, possible values: `false`, `desc`, `asc`

```javascript
<NapprTodoList order={false} />
```

### `orderBy?: bool|string`

Ordering key for the list, possible values: `label`, `id`

```javascript
<NapprTodoList orderBy={'label'} />
```

### `showCompleted?: bool`

Show/Hide completed tasks in the list

```javascript
<NapprTodoList showCompleted={true} />
```

### `showCounter?: bool`

Show/Hide a counter of completed/total tasks of the list

```javascript
<NapprTodoList showCounter={false} />
```

### `showProgress?: bool`

Show/Hide a progress bar for completed/total tasks of the list

```javascript
<NapprTodoList showProgress={false} />
```

### `title?: bool|string`

Title of the list

```javascript
<NapprTodoList title={false} />
```

[travis-url]: https://travis-ci.org/sixertoy/nappr-todolist
[travis-img]: http://img.shields.io/travis/sixertoy/nappr-todolist.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/@nappr/nappr-todolist
[npm-version-img]: http://img.shields.io/npm/v/@nappr/nappr-todolist.svg?style=flat-square
