import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { FaPlusSquare } from 'react-icons/fa';
import { createUseStyles, useTheme } from 'react-jss';

import { CLASS_NAME_PREFIX } from './core/constants';
import { TasksType, TitleType } from './prop-types';
import NapperTodoListCounterComponent from './todolist-counter';
import NapperTodoListProgressComponent from './todolist-progress';

const BASE_CLASS = `${CLASS_NAME_PREFIX}-header`;

const useStyles = createUseStyles({
  btm: {},
  container: {
    display: 'flex',
    flex: '0 1',
    flexDirection: 'column',
    paddingBottom: 12,
  },
  tit: ({ theme }) => ({
    color: theme.color,
    fontSize: theme.titleFontSize,
  }),
  wrp: {
    '& + div': { marginTop: 5 },
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const NapperTodoListHeaderComponent = React.memo(
  ({ createHandler, showCounter, showProgress, tasks, title }) => {
    const theme = useTheme();
    const classes = useStyles({ theme });
    return (
      <div className={classnames(BASE_CLASS, classes.container)}>
        <div className={classnames(`${BASE_CLASS}-wrp`, classes.wrp)}>
          {createHandler && (
            <button type="button" onClick={createHandler}>
              <FaPlusSquare />
            </button>
          )}
          {title && (
            <span className={classnames(`${BASE_CLASS}-tit`, classes.tit)}>
              {title}
            </span>
          )}
          {showCounter && <NapperTodoListCounterComponent tasks={tasks} />}
        </div>
        {showProgress && (
          <div className={classnames(`${BASE_CLASS}-btm`, classes.btm)}>
            <NapperTodoListProgressComponent tasks={tasks} />
          </div>
        )}
      </div>
    );
  }
);

NapperTodoListHeaderComponent.defaultProps = {
  createHandler: null,
};

NapperTodoListHeaderComponent.propTypes = {
  createHandler: PropTypes.func,
  showCounter: PropTypes.bool.isRequired,
  showProgress: PropTypes.bool.isRequired,
  tasks: TasksType.isRequired,
  title: TitleType.isRequired,
};

export default NapperTodoListHeaderComponent;
