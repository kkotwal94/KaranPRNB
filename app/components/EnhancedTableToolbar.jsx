import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import DeleteIcon from 'material-ui-icons/Delete';
import FilterListIcon from 'material-ui-icons/FilterList';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Tooltip from 'material-ui/Tooltip';
import IconButton from 'material-ui/IconButton';
import styles from '../css/components/enhancedtoolbar.css';

const cx = classNames.bind(styles);

const EnhancedTableToolbar = (props) => {
  const { numSelected } = props;

  return (
    <Toolbar
      className={classNames(cx('toolbar-root'), {
        [cx('toolbar-highlight')]: numSelected > 0,
      })}
    >
      <div className={cx('toolbar-title')}>
        {numSelected > 0 ? (
          <Typography type="subheading">{numSelected} selected</Typography>
        ) : (
          <Typography type="title">Comments</Typography>
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
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default EnhancedTableToolbar;
