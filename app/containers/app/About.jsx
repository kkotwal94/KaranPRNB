import React from 'react';
import classNames from 'classnames/bind';
import commonStyles from '../../css/common/layout.css';
import styles from '../../css/components/about.css';

const cx = classNames.bind(commonStyles);
const sx = classNames.bind(styles);
/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */
const About = () => {
  return (
    <div>
      <span>About Page</span>
    </div>
  );
};

export default About;
