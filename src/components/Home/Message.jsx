import React, { Component } from 'react';
import TimeAgo from 'react-timeago';

export class Message extends Component {
  
  constructor(props){
    super();
  }
  
  render(){
    return (
      <div>
        {this.props.text} 
        <TimeAgo date={this.props.created_at} />
      </div>
      //tweet text
      //who wrote the tweet 
      //date 
      //tweet star #
    )
  }
}

export default Message;