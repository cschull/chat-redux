import React, { Component } from 'react';

class Message extends Component {
  render() {
    return (
      <div className="message">
        <div style={{display: "flex"}}>
        <p className="author"><strong>{this.props.author}</strong></p>
        <p className="date" style={{fontSize: "10px"}}>{this.props.date}</p>
        </div>
        <p className="message-content">{this.props.content}</p>
      </div>
    );
  }
}

export default Message;
