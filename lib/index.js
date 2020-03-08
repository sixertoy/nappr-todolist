import PropTypes, {
  arrayOf,
  bool,
  node,
  number,
  oneOf,
  oneOfType,
  shape,
  string,
} from 'prop-types';
import React, { useEffect, useState } from 'react';
import {
  createUseStyles,
  jss,
  JssProvider,
  ThemeProvider,
  useTheme,
} from 'react-jss';

const noop = v => v;
const compose = (...funcs) => args =>
  funcs.reduceRight((acc, fn) => fn(acc), args);
const PlacementType = oneOf(['top', 'bottom', 'both']);
const ThemeType = shape({
  color: string,
  progressRadius: oneOfType([number, string]),
  progressSize: oneOfType([number, string]),
  titleFontSize: oneOfType([number, string]),
});
const TitleType = oneOfType([string, bool]);
const IconType = shape({
  Checked: node.isRequired,
  Unchecked: node.isRequired,
});
const TaskType = shape({
  checked: bool.isRequired,
  id: string.isRequired,
  label: string.isRequired,
});
const TasksType = arrayOf(TaskType);
const moveCompletedToBottom = tasks => {
  const checked = tasks.filter(obj => obj.checked);
  const unchecked = tasks.filter(obj => !obj.checked);
  return [...unchecked, ...checked];
};
const orderTasksBy = (orderBy, order) => tasks => {
  const clone = [...tasks];
  clone.sort((a, b) => {
    let akey = a[orderBy];
    let bkey = b[orderBy];
    if (!akey || !bkey) return 0;
    akey = akey.toString().toLocaleLowerCase();
    bkey = bkey.toString().toLocaleLowerCase();
    if (akey > bkey) return 1;
    if (akey < bkey) return -1;
    return 0;
  });
  if (order === 'desc') clone.reverse();
  return clone;
};
const filterCompletedTasks = tasks => {
  const next = tasks.filter(obj => !obj.checked);
  return next;
};
const checkAllAreCompleted = tasks => {
  const checked = tasks.filter(obj => obj.checked);
  const allChecked = checked.length >= tasks.length;
  return allChecked;
};
const showTopCounter = (position, show) =>
  show && (position === 'top' || position === 'both');
const showTopProgress = (position, show) =>
  show && (position === 'top' || position === 'both');
const showBottomCounter = (position, show) =>
  show && (position === 'bottom' || position === 'both');
const showBottomProgress = (position, show) =>
  show && (position === 'bottom' || position === 'both');
const useStyles = createUseStyles({
  button: ({ theme }) => ({
    alignItems: 'flex-start',
    color: theme.color,
    display: 'flex',
    flexDirection: 'row',
    fontSize: '1rem',
  }),
  task: { marginBottom: 12 },
});
const NapperTodoListCheckerComponent = ({ allChecked, onChange }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    const needUpdate = allChecked !== checked;
    if (needUpdate) setChecked(allChecked);
  }, [allChecked, checked]);
  return React.createElement(
    'div',
    { className: classes.task },
    React.createElement(
      'button',
      {
        className: classes.button,
        onClick: () => {
          const next = !checked;
          setChecked(next);
          onChange(next);
        },
        type: 'button',
      },
      React.createElement(
        'div',
        { className: classes.label },
        !checked && React.createElement('span', null, 'Check all'),
        checked && React.createElement('span', null, 'Uncheck all')
      )
    )
  );
};
NapperTodoListCheckerComponent.propTypes = {
  allChecked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};
const useStyles$1 = createUseStyles({
  counter: ({ theme }) => ({
    color: theme.color,
    display: 'flex',
    flex: '0 1',
    marginLeft: 12,
  }),
});
const NapperTodoListCounterComponent = React.memo(({ tasks }) => {
  const theme = useTheme();
  const classes = useStyles$1({ theme });
  const total = (tasks && tasks.length) || 0;
  const completed = (tasks && tasks.filter(obj => obj.checked).length) || 0;
  return React.createElement(
    'div',
    { className: classes.counter },
    React.createElement('span', null, completed),
    React.createElement('span', null, '/'),
    React.createElement('span', null, total)
  );
});
NapperTodoListCounterComponent.propTypes = { tasks: TasksType.isRequired };
const useStyles$2 = createUseStyles({
  bar: ({ theme }) => ({
    height: theme.progressSize,
    maxHeight: theme.progressSize,
    maxWidth: '100%',
    minHeight: theme.progressSize,
    minWidth: '100%',
    position: 'relative',
    width: '100%',
  }),
  progress: { display: 'flex', flex: 1 },
  thumb: ({ theme }) => ({
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
    borderRadius: theme.progressRadius,
    bottom: 0,
    left: 0,
    position: 'absolute',
    top: 0,
    transition: 'width 0.5s',
    width: 0,
  }),
  track: {
    backgroundColor: 'hsla(0, 0%, 100%, 0.4)',
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    transition: 'left 0.5s',
  },
});
const NapperTodoListProgressComponent = React.memo(({ tasks }) => {
  const theme = useTheme();
  const classes = useStyles$2({ theme });
  const total = (tasks && tasks.length) || 0;
  const completed = (tasks && tasks.filter(obj => obj.checked).length) || 0;
  const percent = (completed * 100) / total;
  const radius = percent > 0 ? '0 2px 2px 0' : 2;
  return React.createElement(
    'div',
    { className: classes.progress },
    React.createElement(
      'div',
      { className: classes.bar },
      React.createElement('div', {
        className: classes.track,
        style: { borderRadius: radius, left: `${percent}%` },
      }),
      React.createElement('div', {
        className: classes.thumb,
        style: { width: `${percent}%` },
      })
    )
  );
});
NapperTodoListProgressComponent.defaultProps = {};
NapperTodoListProgressComponent.propTypes = { tasks: TasksType.isRequired };
const useStyles$3 = createUseStyles({
  footer: { display: 'flex', flex: '0 1', paddingTop: 12 },
  wrapper: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});
const NapperTodoListFooterComponent = React.memo(
  ({ showCounter, showProgress, tasks }) => {
    const classes = useStyles$3();
    return React.createElement(
      'div',
      { className: classes.footer },
      React.createElement(
        'div',
        { className: classes.wrapper },
        showProgress &&
          React.createElement(NapperTodoListProgressComponent, { tasks }),
        showCounter &&
          React.createElement(NapperTodoListCounterComponent, { tasks })
      )
    );
  }
);
NapperTodoListFooterComponent.propTypes = {
  showCounter: PropTypes.bool.isRequired,
  showProgress: PropTypes.bool.isRequired,
  tasks: TasksType.isRequired,
};
const useStyles$4 = createUseStyles({
  bottom: {},
  header: {
    display: 'flex',
    flex: '0 1',
    flexDirection: 'column',
    paddingBottom: 12,
  },
  title: ({ theme }) => ({ color: theme.color, fontSize: theme.titleFontSize }),
  wrapper: {
    '& + div': { marginTop: 5 },
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
const NapperTodoListHeaderComponent = React.memo(
  ({ showCounter, showProgress, tasks, title }) => {
    const theme = useTheme();
    const classes = useStyles$4({ theme });
    return React.createElement(
      'div',
      { className: classes.header },
      React.createElement(
        'div',
        { className: classes.wrapper },
        title &&
          React.createElement('span', { className: classes.title }, title),
        showCounter &&
          React.createElement(NapperTodoListCounterComponent, { tasks })
      ),
      showProgress &&
        React.createElement(
          'div',
          { className: classes.bottom },
          React.createElement(NapperTodoListProgressComponent, { tasks })
        )
    );
  }
);
NapperTodoListHeaderComponent.propTypes = {
  showCounter: PropTypes.bool.isRequired,
  showProgress: PropTypes.bool.isRequired,
  tasks: TasksType.isRequired,
  title: TitleType.isRequired,
};
const NapperTodoListIconChecked = React.memo(() =>
  React.createElement(
    'svg',
    {
      fill: 'currentColor',
      height: '1em',
      stroke: 'currentColor',
      strokeWidth: '0',
      viewBox: '0 0 512 512',
      width: '1em',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    React.createElement('path', {
      d:
        'M133.1 128l23.6 290.7c0 16.2 13.1 29.3 29.3 29.3h141c16.2 0 29.3-13.1 29.3-29.3L379.6 128H133.1zm61.6 265L188 160h18.5l6.9 233h-18.7zm70.3 0h-18V160h18v233zm52.3 0h-18.6l6.8-233H324l-6.7 233zM364 92h-36l-26.3-23c-3.7-3.2-8.4-5-13.2-5h-64.8c-4.9 0-9.7 1.8-13.4 5L184 92h-36c-17.6 0-30 8.4-30 26h276c0-17.6-12.4-26-30-26z',
    })
  )
);
const NapperTodoListIconChecked$1 = React.memo(() =>
  React.createElement(
    'svg',
    {
      fill: 'currentColor',
      height: '1em',
      stroke: 'currentColor',
      strokeWidth: '0',
      viewBox: '0 0 512 512',
      width: '1em',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    React.createElement('path', {
      d:
        'M416 64H96c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm4 348c0 4.4-3.6 8-8 8H100c-4.4 0-8-3.6-8-8V100c0-4.4 3.6-8 8-8h312c4.4 0 8 3.6 8 8v312z',
    }),
    React.createElement('path', {
      d:
        'M363.6 192.9L346 174.8c-.7-.8-1.8-1.2-2.8-1.2-1.1 0-2.1.4-2.8 1.2l-122 122.9-44.4-44.4c-.8-.8-1.8-1.2-2.8-1.2-1 0-2 .4-2.8 1.2l-17.8 17.8c-1.6 1.6-1.6 4.1 0 5.7l56 56c3.6 3.6 8 5.7 11.7 5.7 5.3 0 9.9-3.9 11.6-5.5h.1l133.7-134.4c1.4-1.7 1.4-4.2-.1-5.7z',
    })
  )
);
const NapperTodoListIconUnchecked = React.memo(() =>
  React.createElement(
    'svg',
    {
      fill: 'currentColor',
      height: '1em',
      stroke: 'currentColor',
      strokeWidth: '0',
      viewBox: '0 0 512 512',
      width: '1em',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    React.createElement('path', {
      d:
        'M388 96H124c-15.4 0-28 12.6-28 28v264c0 15.4 12.6 28 28 28h264c15.4 0 28-12.6 28-28V124c0-15.4-12.6-28-28-28zm0 284c0 4.4-3.6 8-8 8H132c-4.4 0-8-3.6-8-8V132c0-4.4 3.6-8 8-8h248c4.4 0 8 3.6 8 8v248z',
    })
  )
);
const useStyles$5 = createUseStyles({
  button: ({ theme }) => ({
    alignItems: 'flex-start',
    color: theme.color,
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    fontSize: '1rem',
  }),
  checkbox: { marginRight: 3, paddingTop: '0.2rem' },
  delete: { flex: '0 1', fontSize: '1.2rem', marginLeft: 6, marginRight: 12 },
  label: { fontSize: '1rem', lineHeight: '1.3rem' },
  task: ({ theme }) => ({
    '&:hover': { backgroundColor: theme.backgroundHover },
    alignItems: 'center',
    borderRadius: theme.taskRadius,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 6,
    paddingTop: 6,
  }),
});
const NapperTodoListTaskComponent = ({
  Icons,
  checked,
  id,
  label,
  onChange,
  onDelete,
}) => {
  const theme = useTheme();
  const classes = useStyles$5({ theme });
  const [isHover, setIsHover] = useState(false);
  const canDelete = isHover && onDelete;
  return React.createElement(
    'div',
    {
      className: classes.task,
      'data-id': `napper-todolist-task-${id}`,
      onMouseEnter: () => setIsHover(true),
      onMouseLeave: () => setIsHover(false),
    },
    React.createElement(
      'button',
      {
        className: classes.button,
        onClick: () => onChange(id, !checked),
        type: 'button',
      },
      React.createElement(
        'div',
        { className: classes.checkbox },
        checked && Icons.Checked,
        !checked && Icons.Unchecked
      ),
      React.createElement(
        'div',
        { className: classes.label },
        React.createElement('span', null, label)
      )
    ),
    canDelete &&
      React.createElement(
        'button',
        {
          className: classes.delete,
          onClick: () => onDelete(id),
          type: 'button',
        },
        React.createElement(NapperTodoListIconChecked, null)
      )
  );
};
NapperTodoListTaskComponent.defaultProps = {
  Icons: {
    Checked: React.createElement(NapperTodoListIconChecked$1, null),
    Unchecked: React.createElement(NapperTodoListIconUnchecked, null),
  },
};
NapperTodoListTaskComponent.propTypes = {
  Icons: IconType,
  checked: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]).isRequired,
};
const useStyles$6 = createUseStyles({
  tasks: { display: 'flex', flex: 1, position: 'relative' },
  wrapper: {
    bottom: 0,
    left: 0,
    overflowX: 'hidden',
    overflowY: 'auto',
    position: 'absolute',
    right: 0,
    top: 0,
  },
});
function renderTaskItem(obj, onChange, onDelete) {
  return React.createElement(NapperTodoListTaskComponent, {
    checked: obj.checked,
    id: obj.id,
    key: obj.id,
    label: obj.label,
    onChange,
    onDelete,
  });
}
const NapperTodoListWrapperComponent = ({
  onChange,
  onDelete,
  render,
  tasks,
}) => {
  const classes = useStyles$6();
  return React.createElement(
    'div',
    { className: classes.tasks },
    React.createElement(
      'div',
      { className: classes.wrapper },
      tasks.map(obj => render(obj, onChange, onDelete))
    )
  );
};
NapperTodoListWrapperComponent.defaultProps = { render: renderTaskItem };
NapperTodoListWrapperComponent.propTypes = {
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]).isRequired,
  render: PropTypes.func,
  tasks: TasksType.isRequired,
};
const useStyles$7 = createUseStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'flex-start',
    maxHeight: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    minWidth: '100%',
    width: '100%',
  },
  tasks: {
    height: '100%',
    maxHeight: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    minWidth: '100%',
    width: '100%',
  },
});
const NapperTodoListComponent = React.memo(
  ({
    completedAtBottom,
    counterPosition,
    onChange,
    onDelete,
    onToggle,
    order,
    orderBy,
    showCompleted,
    showCounter,
    showProgress,
    tasks,
    title,
  }) => {
    const classes = useStyles$7();
    const filtered = compose(
      (!showCompleted && filterCompletedTasks) || noop,
      (completedAtBottom && moveCompletedToBottom) || noop,
      (order && orderTasksBy(orderBy, order)) || noop
    )(tasks);
    const allChecked = checkAllAreCompleted(tasks);
    const counterOnTop = showTopCounter(counterPosition, showCounter);
    const progressOnTop = showTopProgress(counterPosition, showProgress);
    const counterOnBottom = showBottomCounter(counterPosition, showCounter);
    const progressOnBottom = showBottomProgress(counterPosition, showProgress);
    return React.createElement(
      'div',
      { className: classes.tasks },
      React.createElement(
        'div',
        { className: classes.container },
        React.createElement(NapperTodoListHeaderComponent, {
          showCounter: counterOnTop,
          showProgress: progressOnTop,
          tasks,
          title,
        }),
        onToggle &&
          React.createElement(NapperTodoListCheckerComponent, {
            allChecked,
            onChange: onToggle,
          }),
        React.createElement(NapperTodoListWrapperComponent, {
          onChange,
          onDelete,
          tasks: filtered,
        }),
        React.createElement(NapperTodoListFooterComponent, {
          showCounter: counterOnBottom,
          showProgress: progressOnBottom,
          tasks,
        })
      )
    );
  }
);
NapperTodoListComponent.defaultProps = {
  completedAtBottom: true,
  counterPosition: 'bottom',
  onDelete: false,
  onToggle: false,
  order: false,
  orderBy: 'label',
  showCompleted: false,
  showCounter: false,
  showProgress: false,
  tasks: [],
  title: false,
};
NapperTodoListComponent.propTypes = {
  completedAtBottom: PropTypes.bool,
  counterPosition: PlacementType,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  onToggle: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  order: PropTypes.oneOf([false, 'desc', 'asc']),
  orderBy: PropTypes.oneOf(['label', 'id', 'mtime', 'ctime']),
  showCompleted: PropTypes.bool,
  showCounter: PropTypes.bool,
  showProgress: PropTypes.bool,
  tasks: TasksType,
  title: TitleType,
};
const { NODE_ENV } = process.env;
const CLASS_NAME_PREFIX = 'napper-todolist-';
const MINIFY = Boolean(NODE_ENV !== 'development' && NODE_ENV !== 'local');
const BASE_THEME = {
  backgroundHover: 'rgba(0, 0, 0, 0.15)',
  color: '#000000',
  progressRadius: 2,
  progressSize: 5,
  taskRadius: 4,
  titleFontSize: 20,
};
const NapperTodoList = props => {
  const { jssMinifyId, theme, ...rest } = props;
  const minify = jssMinifyId || MINIFY;
  const mergedTheme = { ...BASE_THEME, ...theme };
  return React.createElement(
    JssProvider,
    { classNamePrefix: CLASS_NAME_PREFIX, id: { minify }, jss },
    React.createElement(
      ThemeProvider,
      { theme: mergedTheme },
      React.createElement(NapperTodoListComponent, rest)
    )
  );
};
NapperTodoList.defaultProps = { jssMinifyId: false, theme: {} };
NapperTodoList.propTypes = { jssMinifyId: PropTypes.bool, theme: ThemeType };
export default NapperTodoList;
