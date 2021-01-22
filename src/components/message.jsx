import React, { Component } from 'react';
import { emojify } from 'react-emojione';


function strToRGB(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i += 1) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  const c = (hash & 0x00FFFFFF)
    .toString(16)
    .toUpperCase();
  return `#${"00000".substring(0, 6 - c.length)}${c}`;
}

class Message extends Component {
  render() {
    return (
      <div className="message">
        <div style={{display: "flex", color: strToRGB(this.props.author)}}>
          <p className="author"
            style={{paddingRight: "2%"}}
            >
            <strong>{this.props.author}</strong>
          </p>
          <p className="date" style={{fontSize: "10px"}}>{this.props.date}</p>
        </div>
        <p className="message-content">{emojify(this.props.content)}</p>
      </div>
    );
  }
}

export default Message;
