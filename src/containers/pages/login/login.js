import React, { Component } from 'react';
import {Link} from 'react-router';
import {LeftContainer} from './left-container';

import {events} from "../../shared-assets/form-assets/form-events-data";
export class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
      //Sign up
      username: "",
      'e-mail': "",
      'confirm_e-mail': "",
      password: "",
      confirm_password: "",
      secret_question: "",
      secret_answer: "",
      tos: false
    };

    events.handleInputChange = events.handleInputChange.bind(this);
    events.handleCheckboxClick = events.handleCheckboxClick.bind(this, 'tos');
    this.hideTooltip = this.hideTooltip.bind(this);
    this.showTooltip = this.showTooltip.bind(this);
    events.handleFormSubmit = events.handleFormSubmit.bind(this);
  }

  showTooltip(e){
    let target = e.target.id;
    this.setState({
      [`${target}_tooltip`]: true
    });
  }

  hideTooltip(e){
    let target = e.target.id;
    this.setState({
      [`${target}_tooltip`]: false
    })
  }

  render() {
    return (
      <div className="pageContainer login">
        <div className="wrapper">
          <LeftContainer/>
          <div className="right-container">
            <div className="breakline-wrapper">
              <div className="breakline v-breakline"></div>
            </div>
            <div className="topbar">
              <Link to="sign-in" activeClassName="active">
                <p>Sign In</p>
              </Link>
              <Link to="sign-up" activeClassName="active">
                <p className="active">Sign Up</p>
              </Link>
            </div>
            <div className="breakline h-breakline"></div>
            {/*{console.log(this.targetID())}*/}
            {React.cloneElement((this.props.children), {
              //Sign Up
              username: this.state.username,
              'e-mail': this.state['e-mail'],
              'confirm_e-mail': this.state['confirm_e-mail'],
              password: this.state.password,
              confirm_password: this.state.confirm_password,
              secret_question: this.state.secret_question,
              secret_answer: this.state.secret_answer,
              tos: this.state.tos,

              username_tooltip: this.state.username_tooltip,
              password_tooltip: this.state.password_tooltip,
              confirm_password_tooltip: this.state.confirm_password_tooltip,
              'e-mail_tooltip': this.state['e-mail_tooltip'],
              'confirm_e-mail_tooltip': this.state['confirm_e-mail_tooltip'],
              secret_answer_tooltip: this.state.secret_answer_tooltip,

              handleInputChange: events.handleInputChange,
              handleCheckboxClick: events.handleCheckboxClick,
              hideTooltip: this.hideTooltip,
              showTooltip: this.showTooltip,
              handleFormSubmit: events.handleFormSubmit,
            })
            }
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  username: React.PropTypes.string,
  email: React.PropTypes.string,
  email_confirm: React.PropTypes.string,
  password: React.PropTypes.string,
  password_confirm: React.PropTypes.string,
  secret_question: React.PropTypes.string,
  secret_answer: React.PropTypes.string,
  tos: React.PropTypes.bool,
  handleInputChange: React.PropTypes.func,
  handleCheckboxClick: React.PropTypes.func,
  hideTooltip: React.PropTypes.func,
  showTooltip: React.PropTypes.func,
};