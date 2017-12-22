import React, {Component} from 'react';
import classNames from 'classnames/bind';
import styles from '../css/components/landing.css';
import video from '../video/Ma-Vibes.mp4';
import videoImg from '../images/Ma-Vibes.jpg';
const cx = classNames.bind(styles);

class Landing extends Component {

  constructor(props) {
    super(props);
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
        </div>
      </div>
    );
  }
}

export default Landing;
