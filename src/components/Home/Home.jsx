import React, { Component } from 'react';
import { Message } from './Message'
// import { getMessages } from '../../api/messageApi';
import { connect } from 'react-redux';

export class Home  extends Component  {
  constructor(props) {
        super();
        this.state = {messages : []};
  }
  
  componentDidMount() {
    this.initializeHome();
  }
  
  initializeHome = () => {
    this.setState({
      messages: [
        {
          id: 1, user_id: 1, text: 'I would rather be optimistic and wrong than pessimistic and right.', stars: 5, created_at: '2019-02-21 18:33:10'
        },
        {
          id: 2, user_id: 1, text: 'Nearly all men can stand adversity, but if you want to test a mans character, give him power.', stars: 4, created_at: '2019-02-21 18:33:11'
        }
      ]
    })
  }
      
  render(){
    return(
      <div>
        <ul>
          {this.state.messages.map( message => <Message text={message.text} created_at={message.created_at} key={message.id} />)}          
        </ul>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  messages: state.messages
});

export default connect(mapStateToProps)(Home);