import React, { Component } from 'react';
import { Link } from 'react-router'
export class ForumBlock extends Component {
  render() {
    return (
        <li className={'forum block-width-1'}>
          <Link to={'/forum'}>
            <div>Forum</div>
          </Link>
        </li>
    );
  }
}