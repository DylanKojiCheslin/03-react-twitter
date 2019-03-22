import React, { Component } from 'react';

export class Message extends Component {
  
  constructor(props){
    super();
  }
  
  render(){
    return (
      <div>
        {this.props.text}
        {this.props.created_at}
      </div>
      //tweet text
      //who wrote the tweet 
      //date 
      //tweet star #
    )
  }
}

export default Message;