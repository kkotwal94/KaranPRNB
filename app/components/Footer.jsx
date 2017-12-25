import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from '../css/components/footer.css';


const cx = classNames.bind(styles);

class Footer extends Component {

  determineShow = () => {
    let path = window.location.pathname;
    path = path.split('/')[1];
    switch (path) {
      case '':
        return 'footer-hide';
      case 'about':
        return 'About Page';
      case 'login':
       return 'Log in';
      case 'register':
        return 'Register';
      case 'dashboard':
        return 'Dashboard';
      default:
        return 'Landing';
    }
  }

  render() {
    const style = this.determineShow();
    return (
      <div className={cx(style === 'footer-hide' ? 'footer-hide' : 'footer')}>
        <p className={cx('footer-text')}>{style}</p>
      </div>
    );
}
}


export default Footer;
