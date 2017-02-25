import React, { Component } from 'react';
import unirest from 'unirest';
import {Sidebar} from './picked-class/left-container/sidebar';
import {Topbar} from './picked-class/right-container/topbar';
import {Card} from './picked-class/right-container/choosen-class-selection/card';
export class CreateDeckClassSelected extends Component {
  constructor(props){
    super(props);
    this.state = {
      cards: []
    };
  }

  componentDidMount()  {
    unirest.get(`https://omgvamp-hearthstone-v1.p.mashape.com/cards/classes/Druid?collectible=1`)
        .header("X-Mashape-Key", "d33SgqkTnSmshYMsQH4KAZvYyT96p1mORdSjsnYHknwZaVgraf")
        .end(res => {

          this.setState({
            cards: res.body
          });
        });
  }
  render() {
    return (
        <div className={`choosen-class-view`}>
          <div className="left-container">
            <Sidebar/>
          </div>
          <div className="right-container">
            <Topbar/>
              <Card cards={this.state.cards}/>
          </div>

        </div>
    );
  }
}