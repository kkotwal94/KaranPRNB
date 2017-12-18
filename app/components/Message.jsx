import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import Snackbar from 'material-ui/Snackbar';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';
import styles from '../css/components/messages.css';
import { dismissMessage } from '../actions/message';

const cx = classNames.bind(styles);

class Message extends Component {

  handleClose = (event, reason) => {
    this.props.dismissMessage();
  };

  renderSnackbar() {
    return (
      <div>
        <Snackbar
          onClose={this.handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          className={cx('message-container', {
          success: this.props.message.type === 'SUCCESS',
          error: this.props.message.type === 'ERROR',
          warning: this.props.message.type === 'WARNING'
          })}
          open={this.props.message.open}
          message={this.props.message.message}
          action={[
           <Button key="undo" color="primary" dense onClick={this.handleClose}>
             Close
           </Button>,
         ]}
         />
      </div>
    );
  }
  determineRender() {
    const {message} = this.props.message;
    if (message !== undefined && message.length > 0) {
      return (
        <div>
          {this.renderSnackbar()}
        </div>
      );
    }
  }
  render() {
    return (
      <div>
        {this.determineRender()}
      </div>
    );
  }
}


Message.propTypes = {
  message: PropTypes.object,
  dismissMessage: PropTypes.func.isRequired,
};

function mapStateToProps({message}) {
  return {
    message
  };
}

export default connect(mapStateToProps, {dismissMessage})(Message);
