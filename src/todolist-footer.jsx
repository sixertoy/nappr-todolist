import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles } from 'react-jss';

import { CLASS_NAME_PREFIX } from './core/constants';
import { TasksType } from './prop-types';
import NapprTodoListCounterComponent from './todolist-counter';
import NapprTodoListProgressComponent from './todolist-progress';

const BASE_CLASS = `${CLASS_NAME_PREFIX}-footer`;

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    flex: '0 1',
    paddingTop: 12,
  },
  wrp: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});

const NapprTodoListFooterComponent = React.memo(
  ({ showCounter, showProgress, tasks }) => {
    const classes = useStyles();
    return (
      <div className={`${BASE_CLASS} ${classes.container}`}>
        <div className={`${BASE_CLASS}-wrp ${classes.wrp}`}>
          {showProgress && <NapprTodoListProgressComponent tasks={tasks} />}
          {showCounter && <NapprTodoListCounterComponent tasks={tasks} />}
        </div>
      </div>
    );
  }
);

NapprTodoListFooterComponent.propTypes = {
  showCounter: PropTypes.bool.isRequired,
  showProgress: PropTypes.bool.isRequired,
  tasks: TasksType.isRequired,
};

export default NapprTodoListFooterComponent;
