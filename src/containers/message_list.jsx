import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import React, { Component } from 'react';
import { createRef } from 'react';
import Message from '../components/message';
import MessageForm from '../components/message_form';

import { getMessages } from '../actions/index';

class MessageList extends Component {

  componentWillMount() {
    this.props.getMessages(this.props.selectedChannel);
  }

  componentDidMount() {
    this.refresher = setInterval(this.props.getMessages(this.props.selectedChannel), 2000);
  }

  componentDidUpdate() {
    this.list.scrollTop = this.list.scrollHeight;
  }

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
      <div style={{ width: "100%" }}>
        <h1 className="channel-title">Channel#{`${this.props.selectedChannel}`}</h1>
        <div className="message-list"
            ref={(list) => { this.list = list; }}
            style={{overflow: "auto", height: "60vh", marginTop: "30px", width: "100%"}}>
          {this.renderList()}
        </div>
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
