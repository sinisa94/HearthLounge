import React, { Component } from 'react';
export class Topbar extends Component {
  render() {
    return (
        <ul className="topbar has-icons">
            <li className="home-grid">
              <span className="hs-icon icon-grid"></span>
              <div className="tooltip">
                <div className="caret-up"></div>
                <p>Homepage block scheme</p>
              </div>
            </li>
            <li className="deck">
              <span className="hs-icon icon-deck"></span>
              <div className="tooltip">
                <div className="caret-up"></div>
                <p>Decks</p>
              </div>
            </li>
            <li className="forum">
              <span className="hs-icon icon-bubbles2"></span>
              <div className="tooltip">
                <div className="caret-up"></div>
                <p>Forum</p>
              </div>
            </li>
            <li className="tournaments">
              <span className="hs-icon icon-trophy"></span>
              <div className="tooltip">
                <div className="caret-up"></div>
                <p>Tournaments</p>
              </div>
            </li>
            <li className="streams">
              <span className="hs-icon icon-twitch"></span>
              <div className="tooltip">
                <div className="caret-up"></div>
                <p>Streams</p>
              </div>
            </li>
        </ul>
    );
  }
}