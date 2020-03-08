import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles } from 'react-jss';

import { CLASS_NAME_PREFIX } from './core/constants';
import { TasksType } from './core/prop-types';
import NapperTodoListCounterComponent from './todolist-counter';
import NapperTodoListProgressComponent from './todolist-progress';

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

const NapperTodoListFooterComponent = React.memo(
  ({ showCounter, showProgress, tasks }) => {
    const classes = useStyles();
    return (
      <div className={classnames(`${BASE_CLASS}-footer`, classes.container)}>
        <div className={classnames(`${BASE_CLASS}-footer-wrp`, classes.wrp)}>
          {showProgress && <NapperTodoListProgressComponent tasks={tasks} />}
          {showCounter && <NapperTodoListCounterComponent tasks={tasks} />}
        </div>
      </div>
    );
  }
);

NapperTodoListFooterComponent.propTypes = {
  showCounter: PropTypes.bool.isRequired,
  showProgress: PropTypes.bool.isRequired,
  tasks: TasksType.isRequired,
};

export default NapperTodoListFooterComponent;
