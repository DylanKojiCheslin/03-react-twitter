import React, { Component } from 'react';
import TimeAgo from 'react-timeago';
import './Message.css';
import Icon from '@material-ui/core/Icon';

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
        <div className="timeAgo">
          <TimeAgo date={this.props.created_at} />
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