import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles } from 'react-jss';

import { CLASS_NAME_PREFIX } from './core/constants';
import { TasksType } from './prop-types';
import NapprTodoListTaskComponent from './todolist-task';

const BASE_CLASS = `${CLASS_NAME_PREFIX}-tasks`;

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    flex: 1,
    position: 'relative',
  },
  wrp: {
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    left: 0,
    overflowX: 'hidden',
    overflowY: 'auto',
    position: 'absolute',
    right: 0,
    top: 0,
  },
});

const NapprTodoListTasksComponent = ({ onChange, onDelete, render, tasks }) => {
  const classes = useStyles();
  return (
    <div className={`${BASE_CLASS} ${classes.container}`}>
      <div className={`${BASE_CLASS}-wrp ${classes.wrp}`}>
        {tasks.map(obj => render(obj, onChange, onDelete))}
      </div>
    </div>
  );
};

NapprTodoListTasksComponent.defaultProps = {
  render: (obj, onChange, onDelete) => {
    return (
      <NapprTodoListTaskComponent
        key={obj.id}
        checked={obj.checked}
        id={obj.id}
        label={obj.label}
        onChange={onChange}
        onDelete={onDelete}
      />
    );
  },
};

NapprTodoListTasksComponent.propTypes = {
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]).isRequired,
  render: PropTypes.func,
  tasks: TasksType.isRequired,
};

export default NapprTodoListTasksComponent;
