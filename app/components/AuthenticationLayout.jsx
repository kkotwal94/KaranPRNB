import React, {Component} from 'react';
import classNames from 'classnames/bind';
import Grid from 'material-ui/Grid';
import styles from '../css/components/authenticationform.css';

const cx = classNames.bind(styles);

class AuthenticationLayout extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={cx('authentication')}>
        <Grid item xs={12}>
          <Grid
            container
            spacing={0}
            alignContent="center"
            alignItems="center"
            justify="center">
            <Grid
                item
                className={cx('authentication-grid')}
                xs={10}
                sm={4}
                xl={2}>
              {this.props.children}
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default AuthenticationLayout;
