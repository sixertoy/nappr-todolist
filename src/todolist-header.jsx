import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import { NapprTodoListIconPlus } from './assets';
import { CLASS_NAME_PREFIX } from './core/constants';
import { TasksType, TitleType } from './prop-types';
import NapprTodoListCounterComponent from './todolist-counter';
import NapprTodoListProgressComponent from './todolist-progress';

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

const NapprTodoListHeaderComponent = React.memo(
  ({ createHandler, parentId, showCounter, showProgress, tasks, title }) => {
    const theme = useTheme();
    const classes = useStyles({ theme });
    return (
      <div className={`${BASE_CLASS} ${classes.container}`}>
        <div className={`${BASE_CLASS}-wrp ${classes.wrp}`}>
          {createHandler && (
            <button type="button" onClick={() => createHandler(parentId)}>
              <NapprTodoListIconPlus />
            </button>
          )}
          {title && (
            <span className={`${BASE_CLASS}-tit ${classes.tit}`}>{title}</span>
          )}
          {showCounter && <NapprTodoListCounterComponent tasks={tasks} />}
        </div>
        {showProgress && (
          <div className={`${BASE_CLASS}-btm ${classes.btm}`}>
            <NapprTodoListProgressComponent tasks={tasks} />
          </div>
        )}
      </div>
    );
  }
);

NapprTodoListHeaderComponent.defaultProps = {
  createHandler: null,
  parentId: null,
};

NapprTodoListHeaderComponent.propTypes = {
  createHandler: PropTypes.func,
  parentId: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  showCounter: PropTypes.bool.isRequired,
  showProgress: PropTypes.bool.isRequired,
  tasks: TasksType.isRequired,
  title: TitleType.isRequired,
};

export default NapprTodoListHeaderComponent;
