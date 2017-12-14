import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import styles from '../css/components/authenticationform.css';

const cx = classNames.bind(styles);

class AuthenticationForm extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.inputs);
    let inputs = (
      this.props.inputs.map((input, i) =>
        <Grid item key={'signup-text-' + i}>
          <TextField
              id={'username' + i}
              label={input.label}
              placeholder={input.label}
              required
              onChange={input.onChange}
              type={input.password ? 'password' : ''}
              autoComplete="off"
              className={cx('authentication-textfield')}
            />
        </Grid>
        )
    );
    return (
      <div>
        <AppBar position="relative" color="primary" className={cx('authentication-title')}>
          <div className={cx('authentication-title-text')}>
            {this.props.title}
          </div>
        </AppBar>
        <Paper className={cx('authentication-paper')}>
          <Grid className={cx('authentication-module')}>
            <form onSubmit={this.props.formSubmit}>
              <Grid container direction="column" justify="center" alignItems="center" className={cx('authentication-align')}>
                {inputs}
                <Button raised color="primary" type="submit">
                  Create
                  {this.props.formSubmitIcon}
                </Button>
              </Grid>
            </form>
          </Grid>
        </Paper>
      </div>
    )
  }
}

AuthenticationForm.propTypes = {
  title: PropTypes.string.isRequired,
  inputs: PropTypes.array.isRequired,
  formSubmit: PropTypes.func.isRequired,
  formSubmitText: PropTypes.string.isRequired,
  formSubmitIcon: PropTypes.node,
};
export default AuthenticationForm;
