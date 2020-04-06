/* eslint
  react/jsx-props-no-spreading: 0
*/
import './core/styles/index.css';

import PropTypes from 'prop-types';
import React from 'react';
import { jss, JssProvider, ThemeProvider } from 'react-jss';

import { BASE_THEME, CLASS_NAME_PREFIX } from './core/constants';
import { ThemeType } from './prop-types';
import NapprTodoListComponent from './todolist';

const JSS_CLASSNAME_PREFIX = `${CLASS_NAME_PREFIX}-`;

const NapprTodoList = props => {
  const { jssMinifyId, theme, ...rest } = props;
  const mergedTheme = { ...BASE_THEME, ...theme };
  return (
    <JssProvider
      classNamePrefix={JSS_CLASSNAME_PREFIX}
      id={{ minify: jssMinifyId }}
      jss={jss}>
      <ThemeProvider theme={mergedTheme}>
        <NapprTodoListComponent {...rest} />
      </ThemeProvider>
    </JssProvider>
  );
};

NapprTodoList.defaultProps = {
  jssMinifyId: true,
  theme: {},
};

NapprTodoList.propTypes = {
  jssMinifyId: PropTypes.bool,
  theme: ThemeType,
};

export default NapprTodoList;
