import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import React, { Component } from 'react';
import Message from '../components/message';

import { getMessages } from '../actions/index';

class MessageList extends Component {

  componentWillMount() {
    this.props.getMessages('general');
  }

  renderList = () => {
    const messages = this.props.messages.map( message =>
      <Message
        author={message.author}
        content={message.content}
        date={message.created_at}
        key={message.created_at}
      />
    );
    return messages;
  }

  render() {
    console.log(this.props);
    return (
      <div className="message-list">
        <h1>Channel#general</h1>
        {this.renderList()}
        <form style={{display: "flex"}}>
          <input style={{width:"80%"}} type="text" className="form-control"/>
          <input style={{width:"20%"}} type="submit" value="send" className="form-control"/>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getMessages: getMessages }, dispatch);
}

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
