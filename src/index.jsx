import './core/styles/index.css';

import PropTypes from 'prop-types';
import React from 'react';
import { jss, JssProvider, ThemeProvider } from 'react-jss';

import { BASE_THEME, CLASS_NAME_PREFIX } from './core/constants';
import { ThemeType } from './core/prop-types';
import NapperTodoListComponent from './todolist';

const NapperTodoList = props => {
  const { jssMinifyId, theme, ...rest } = props;
  const mergedTheme = { ...BASE_THEME, ...theme };
  return (
    <JssProvider
      classNamePrefix={CLASS_NAME_PREFIX}
      id={{ minify: jssMinifyId }}
      jss={jss}>
      <ThemeProvider theme={mergedTheme}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <NapperTodoListComponent {...rest} />
      </ThemeProvider>
    </JssProvider>
  );
};

NapperTodoList.defaultProps = {
  jssMinifyId: true,
  theme: {},
};

NapperTodoList.propTypes = {
  jssMinifyId: PropTypes.bool,
  theme: ThemeType,
};

export default NapperTodoList;
