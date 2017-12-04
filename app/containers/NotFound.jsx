import React from 'react';
import classNames from 'classnames/bind';
import commonStyles from '../css/common/layout.css';

const cx = classNames.bind(commonStyles);
/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */
const NotFound = () => <div><h1>404 NOT FOUNDs</h1></div>;

export default NotFound;
