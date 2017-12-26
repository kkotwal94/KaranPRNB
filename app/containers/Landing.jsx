import React, {Component} from 'react';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import Button from 'material-ui/Button';
import styles from '../css/components/landing.css';
import video from '../video/Ma-Vibes.mp4';
import videoImg from '../images/Ma-Vibes.jpg';
import passTheAuxImg from '../images/PassTheAux.png';
const cx = classNames.bind(styles);

class Landing extends Component {

determineHeaderRender = () => {
  const authenticated = this.props.user.authenticated;
  if (!authenticated) {
    return (
      <div className={cx('header-buttons')}>
        <Link to="/lobbys">
          <Button className={cx('header-button')} raised color="accent"> View Lobbies </Button>
        </Link>
        <Link to="/login">
          <Button className={cx('header-button')} raised color="primary"> Get Started </Button>
        </Link>
      </div>
    );
  }
  return (
    <div className={cx('header-buttons')}>
      <Link to="/lobbys">
        <Button className={cx('header-button')} raised color="accent">View Lobbies</Button>
      </Link>
      <Button className={cx('header-button')} raised color="primary">Open PassTheAux</Button>
    </div>
  );
}
  render() {
    return (
      <div className={cx('landing')}>
        <div className={cx('hero-container')}>
          <video autoPlay loop>
            <source src={video} type="video/mp4" />
          </video>
          <div className={cx('hidden')}>
            <img src={videoImg} alt="" />
          </div>
          <div className={cx('header')}>
            <img className={cx('logo')} src={passTheAuxImg} height="150" alt="PassTheAux" />
            {this.determineHeaderRender()}
            <h5 className={cx('text-description')}>
              Create a playlist or queue and get started!
            </h5>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  user: PropTypes.object,
};

function mapStateToProps({user}) {
  return {
    user
  };
}


export default connect(mapStateToProps)(Landing);
