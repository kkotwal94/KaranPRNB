import React, { Component } from 'react';
import { Link } from 'react-router';

class Navigation extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <Link to="/">
          Dashboard
        </Link>
        <Link to="/about">
          About
        </Link>
        <Link to="/NotFound">
          Not Found
        </Link>
      </div>
    );
  }
}

export default Navigation;
