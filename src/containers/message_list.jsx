import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import React, { Component } from 'react';
import Message from '../components/message';
import MessageForm from '../components/message_form';

import { getMessages } from '../actions/index';

class MessageList extends Component {

  componentWillMount() {
    this.props.getMessages(this.props.selectedChannel);
  }

  componentDidMount() {
    this.refresher = setInterval(this.props.getMessages(this.props.selectedChannel), 5000);
  }

  // componentDidUpdate() {
    // this.list.scrollTop = this.list.scrollHeight;
  // }

  componentWillUnmount() {
    clearInterval(this.refresher);
  }

  renderList = () => {
    const messages = this.props.messages.filter(message =>
      message.channel === this.props.selectedChannel);
    const theseMessages = messages.map(message =>
      (<Message
        author={message.author}
        content={message.content}
        date={message.created_at}
        key={message.created_at}
      />)
    );
    return theseMessages;
  }

  render() {
    return (
      <div className="message-list">
        <h1>Channel#{`${this.props.selectedChannel}`}</h1>
        {this.renderList()}
        <MessageForm />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getMessages: getMessages }, dispatch);
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
