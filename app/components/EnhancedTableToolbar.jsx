import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import DeleteIcon from 'material-ui-icons/Delete';
import FilterListIcon from 'material-ui-icons/FilterList';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Tooltip from 'material-ui/Tooltip';
import IconButton from 'material-ui/IconButton';
import commonStyles from '../css/components/enhancedtable.css';

const cx = classNames.bind(commonStyles);

class EnhancedTableToolbar extends React.Component {

render() {
  const { numSelected, title } = this.props;
  return (
    <Toolbar
      className={cx('table-root')}>
      <div className={cx('toolbar-title')}>
        {numSelected > 0 ? (
          <Typography type="subheading">{numSelected} selected</Typography>
        ) : (
          <Typography type="title">{title}</Typography>
        )}
      </div>
      <div className={cx('toolbar-spacer')} />
      <div className={cx('toolbar-actions')}>
        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton aria-label="Delete">
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Filter list">
            <IconButton aria-label="Filter list">
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        )}
      </div>
    </Toolbar>
  );
}
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default EnhancedTableToolbar;
