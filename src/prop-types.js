import PropTypes from 'prop-types';

export const PlacementType = PropTypes.oneOf(['top', 'bottom', 'both']);

export const ThemeType = PropTypes.shape({
  color: PropTypes.string,
  progressRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  progressSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  titleFontSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
});

export const TitleType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.bool,
]);

export const IconType = PropTypes.shape({
  Checked: PropTypes.node.isRequired,
  Unchecked: PropTypes.node.isRequired,
});

export const TaskType = PropTypes.shape({
  checked: PropTypes.bool.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.string.isRequired,
});

export const TasksType = PropTypes.arrayOf(TaskType);
