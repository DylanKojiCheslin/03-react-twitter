import React, { Component } from 'react';
import { TimeSince } from  './TimeSince';
import './Message.css';

export class Message extends Component {
  
  constructor(props){
    super();
  }
  
  render(){
    return (
      <div className='messageContent'>
        <div className='hanle'>{this.props.hanle}</div>
        <img
          src={this.props.image}
          alt='The writers avatar'
          />
        <div className="messageText">
          {this.props.text} 
        </div>
        <div className="timeSinceDate">
          <TimeSince created_at={this.props.created_at} />
        </div>
        <div className="messageStars">
          {this.props.stars} stars
        </div>
      </div>
    )
  }
}

export default Message;