import React from 'react';
import classNames from 'classnames/bind';
import styles from '../css/components/footer.css';

const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <div className={cx('footer')}>
      <p>This should be a footer</p>
    </div>
  );
};

export default Footer;
