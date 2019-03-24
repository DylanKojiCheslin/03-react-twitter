import React, { Component } from 'react';
import TimeAgo from 'react-timeago';

export class TimeSinceDate extends Component {
  
  constructor(props){
    console.log(props);
    super();
  }
  
  render(){
    return (
      <TimeAgo date={this.props.created_at} />
    )
  }  
}