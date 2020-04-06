# NAPPR TodoList

## Install

```bash
yarn add https://github.com/sixertoy/napper-todolist
```

## Usage

```javascript
const onTaskChange = (tasks, updateTasks) => (id, checked) => {
  const next = tasks.map(obj => (obj.id !== id && obj) || { ...obj, checked });
  updateTasks(next);
};

const Application = ({ todos }) => {
  const [tasks, updateTasks] = useState(todos);
  return (
    <div style={{ height: 200 }}>
      <NapperTodoList
        onChange={onTaskChange(tasks, updateTasks)}
        tasks={tasks}
        title={'This is the title of a list'}
        showCompleted={true}
        completedAtBottom={true}
      />
    </div>
  );
};
```

## Required Props

```javascript
{
  onChange: func,
}
```

## Optionals Props

```javascript
{
  completedAtBottom: boolean,
  counterPosition: oneOf('top', 'bottom', 'both'),
  id: oneOf(bool, string),
  onDelete: oneOf(bool, func),
  onToggleAll: oneOf(bool, func),
  order: oneOf(false, 'desc', 'asc'),
  orderBy: oneOf('label', 'id', 'mtime', 'ctime'),
  showCompleted: bool,
  showCounter: bool,
  showProgress: bool,
  tasks: {
    checked: bool*,
    id: oneOf(string, bool)*,
    label: string*
  },
  title: oneOf(string, bool),
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
