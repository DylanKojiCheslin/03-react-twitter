import React, { Component } from 'react';
import { TimeSinceDate } from  './TimeSinceDate';
import './Message.css';

export class Message extends Component {
  
  constructor(props){
    super();
  }
  
  render(){
    return (
      <div className='messageContent'>
        <div className="messageText">
          {this.props.text} 
        </div>
        <div className="timeSinceDate">
          <TimeSinceDate created_at={this.props.created_at} />
        </div>
        <div className="messageStars">
          {this.props.stars} stars
        </div>
      </div>
      //tweet text
      //who wrote the tweet 
      //date 
      //tweet star #
    )
  }
}

export default Message;