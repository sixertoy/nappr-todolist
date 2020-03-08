import classnames from 'classnames';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import { CLASS_NAME_PREFIX } from './core/constants';
import { TasksType } from './core/prop-types';

const BASE_CLASS = `${CLASS_NAME_PREFIX}-counter`;

const useStyles = createUseStyles({
  container: ({ theme }) => ({
    color: theme.color,
    display: 'flex',
    flex: '0 1',
    marginLeft: 12,
  }),
  cpt: {},
  spl: {},
  ttl: {},
});

const NapperTodoListCounterComponent = React.memo(({ tasks }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const total = (tasks && tasks.length) || 0;
  const completed = (tasks && tasks.filter(obj => obj.checked).length) || 0;
  return (
    <div className={classnames(BASE_CLASS, classes.container)}>
      <span className={classnames(`${BASE_CLASS}-cpt`)}>{completed}</span>
      <span className={classnames(`${BASE_CLASS}-spl`)}>/</span>
      <span className={classnames(`${BASE_CLASS}-ttl`)}>{total}</span>
    </div>
  );
});

NapperTodoListCounterComponent.propTypes = {
  tasks: TasksType.isRequired,
};

export default NapperTodoListCounterComponent;
