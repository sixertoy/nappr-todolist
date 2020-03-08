import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles } from 'react-jss';

import { CLASS_NAME_PREFIX } from './core/constants';
import { TasksType } from './core/prop-types';
import NapperTodoListTaskComponent from './todolist-task';

const BASE_CLASS = `${CLASS_NAME_PREFIX}-tasks`;

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    flex: 1,
    position: 'relative',
  },
  wrp: {
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
  return (
    <NapperTodoListTaskComponent
      key={obj.id}
      checked={obj.checked}
      id={obj.id}
      label={obj.label}
      onChange={onChange}
      onDelete={onDelete}
    />
  );
}

const NapperTodoListTasksComponent = ({
  onChange,
  onDelete,
  render,
  tasks,
}) => {
  const classes = useStyles();
  return (
    <div className={classnames(BASE_CLASS, classes.container)}>
      <div className={classnames(`${BASE_CLASS}-wrp`, classes.wrp)}>
        {tasks.map(obj => render(obj, onChange, onDelete))}
      </div>
    </div>
  );
};

NapperTodoListTasksComponent.defaultProps = {
  render: renderTaskItem,
};

NapperTodoListTasksComponent.propTypes = {
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]).isRequired,
  render: PropTypes.func,
  tasks: TasksType.isRequired,
};

export default NapperTodoListTasksComponent;
