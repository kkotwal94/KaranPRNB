import React from 'react';
import classNames from 'classnames/bind';
import commonStyles from '../../css/components/lobbys.css';

const cx = classNames.bind(commonStyles);

/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */
const Lobbys = () => <div><span>Lobbys</span></div>;

export default Lobbys;
