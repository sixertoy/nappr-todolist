import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import { CLASS_NAME_PREFIX } from './core/constants';
import { TasksType } from './prop-types';

const BASE_CLASS = `${CLASS_NAME_PREFIX}-progress`;

const useStyles = createUseStyles({
  bar: ({ theme }) => ({
    height: theme.progressSize,
    maxHeight: theme.progressSize,
    maxWidth: '100%',
    minHeight: theme.progressSize,
    minWidth: '100%',
    position: 'relative',
    width: '100%',
  }),
  container: {
    display: 'flex',
    flex: 1,
  },
  tmb: ({ theme }) => ({
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
    borderRadius: theme.progressRadius,
    bottom: 0,
    left: 0,
    position: 'absolute',
    top: 0,
    transition: 'width 0.5s',
    width: 0,
  }),
  trk: {
    backgroundColor: 'hsla(0, 0%, 100%, 0.4)',
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    transition: 'left 0.5s',
  },
});

const NapprTodoListProgressComponent = React.memo(({ tasks }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const total = (tasks && tasks.length) || 0;
  const completed = (tasks && tasks.filter(obj => obj.checked).length) || 0;
  const percent = (completed * 100) / total;
  const radius = percent > 0 ? '0 2px 2px 0' : 2;
  return (
    <div className={`${BASE_CLASS} ${classes.container}`}>
      <div className={`${BASE_CLASS}-bar ${classes.bar}`}>
        <div
          className={`${BASE_CLASS}-trk ${classes.trk}`}
          style={{ borderRadius: radius, left: `${percent}%` }}
        />
        <div
          className={`${BASE_CLASS}-tmb ${classes.tmb}`}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
});

NapprTodoListProgressComponent.defaultProps = {};

NapprTodoListProgressComponent.propTypes = {
  tasks: TasksType.isRequired,
};

export default NapprTodoListProgressComponent;
