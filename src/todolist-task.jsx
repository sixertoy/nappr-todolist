import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import {
  NapprTodoListIconChecked,
  NapprTodoListIconTrash,
  NapprTodoListIconUnchecked,
} from './assets';
import { CLASS_NAME_PREFIX } from './core/constants';
import { IconType } from './prop-types';

const BASE_CLASS = `${CLASS_NAME_PREFIX}-task`;

const useStyles = createUseStyles({
  btn: ({ theme }) => ({
    alignItems: 'flex-start',
    color: theme.color,
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    fontSize: '1rem',
  }),
  ckb: {
    marginRight: 3,
    paddingTop: '0.2rem',
  },
  dlt: {
    flex: '0 1',
    fontSize: '1.2rem',
    marginLeft: 6,
    marginRight: 12,
  },
  lbl: {
    fontSize: '1rem',
    lineHeight: '1.3rem',
  },
  task: ({ theme }) => ({
    '&:hover': {
      backgroundColor: theme.backgroundHover,
    },
    alignItems: 'center',
    borderRadius: theme.taskRadius,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 6,
    paddingTop: 6,
  }),
});

const NapprTodoListTaskComponent = ({
  Icons,
  checked,
  id,
  label,
  onChange,
  onDelete,
}) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const [isHover, setIsHover] = useState(false);
  const canDelete = isHover && onDelete;
  return (
    <div
      className={`${BASE_CLASS} ${classes.task}`}
      data-id={`nappr-todolist-task-${id}`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}>
      <button
        className={`${BASE_CLASS}-btn ${classes.btn}`}
        type="button"
        onClick={() => onChange(id, !checked)}>
        <div className={`${BASE_CLASS}-ckb ${classes.ckb}`}>
          {checked && Icons.Checked}
          {!checked && Icons.Unchecked}
        </div>
        <div className={`${BASE_CLASS}-lbl ${classes.lbl}`}>
          <span>{label}</span>
        </div>
      </button>
      {canDelete && (
        <button
          className={`${BASE_CLASS}-dlt ${classes.dlt}`}
          type="button"
          onClick={() => onDelete(id)}>
          <NapprTodoListIconTrash />
        </button>
      )}
    </div>
  );
};

NapprTodoListTaskComponent.defaultProps = {
  Icons: {
    Checked: <NapprTodoListIconChecked />,
    Unchecked: <NapprTodoListIconUnchecked />,
  },
};

NapprTodoListTaskComponent.propTypes = {
  Icons: IconType,
  checked: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]).isRequired,
};

export default NapprTodoListTaskComponent;
