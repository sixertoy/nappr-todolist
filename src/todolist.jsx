import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles } from 'react-jss';

import { compose, noop } from './core/fp';
import { PlacementType, TasksType, TitleType } from './core/prop-types';
import {
  checkAllAreCompleted,
  filterCompletedTasks,
  moveCompletedToBottom,
  orderTasksBy,
  showBottomCounter,
  showBottomProgress,
  showTopCounter,
  showTopProgress,
} from './core/utils';
import NapperTodoListCheckerComponent from './todolist-checker';
import NapperTodoListFooterComponent from './todolist-footer';
import NapperTodoListHeaderComponent from './todolist-header';
import NapperTodoListWrapperComponent from './todolist-wrapper';

const useStyles = createUseStyles({
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
    id,
    onChange,
    onDelete,
    onToggleAll,
    order,
    orderBy,
    showCompleted,
    showCounter,
    showProgress,
    tasks,
    title,
  }) => {
    const classes = useStyles();
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
    const containerProps = {};
    if (id) containerProps.id = id;
    return (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <div {...containerProps} className={classes.tasks}>
        <div className={classes.container}>
          <NapperTodoListHeaderComponent
            showCounter={counterOnTop}
            showProgress={progressOnTop}
            tasks={tasks}
            title={title}
          />
          {onToggleAll && (
            <NapperTodoListCheckerComponent
              allChecked={allChecked}
              onChange={onToggleAll}
            />
          )}
          <NapperTodoListWrapperComponent
            tasks={filtered}
            onChange={onChange}
            onDelete={onDelete}
          />
          <NapperTodoListFooterComponent
            showCounter={counterOnBottom}
            showProgress={progressOnBottom}
            tasks={tasks}
          />
        </div>
      </div>
    );
  }
);

NapperTodoListComponent.defaultProps = {
  completedAtBottom: true,
  counterPosition: 'bottom',
  id: false,
  onDelete: false,
  onToggleAll: false,
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
  id: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  onToggleAll: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  order: PropTypes.oneOf([false, 'desc', 'asc']),
  orderBy: PropTypes.oneOf(['label', 'id', 'mtime', 'ctime']),
  showCompleted: PropTypes.bool,
  showCounter: PropTypes.bool,
  showProgress: PropTypes.bool,
  tasks: TasksType,
  title: TitleType,
};

export default NapperTodoListComponent;
