import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import { CLASS_NAME_PREFIX } from './core/constants';

const BASE_CLASS = `${CLASS_NAME_PREFIX}-checker`;

const useStyles = createUseStyles({
  btn: ({ theme }) => ({
    alignItems: 'flex-start',
    color: theme.color,
    display: 'flex',
    flexDirection: 'row',
    fontSize: '1rem',
  }),
  container: {
    marginBottom: 12,
  },
  lbl: {},
});

const NapperTodoListCheckerComponent = ({ allChecked, onChange }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    const needUpdate = allChecked !== checked;
    if (needUpdate) setChecked(allChecked);
  }, [allChecked, checked]);
  return (
    <div className={classnames(`${BASE_CLASS}`, classes.container)}>
      <button
        className={classnames(`${BASE_CLASS}-btn`, classes.btn)}
        type="button"
        onClick={() => {
          const next = !checked;
          setChecked(next);
          onChange(next);
        }}>
        <div className={classnames(`${BASE_CLASS}-lbl`, classes.lbl)}>
          {!checked && <span>Check all</span>}
          {checked && <span>Uncheck all</span>}
        </div>
      </button>
    </div>
  );
};

NapperTodoListCheckerComponent.propTypes = {
  allChecked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default NapperTodoListCheckerComponent;
