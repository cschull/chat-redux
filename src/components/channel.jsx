import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectChannel } from '../actions';

class Channel extends Component {

  handleClick = () => {
    this.props.selectChannel(this.props.channel);
    console.log(`this is the active channel: ${this.props.channel}`);
  }

  render() {
    let title = "channel";
    if (this.props.selectedChannel === this.props.channel) {
      title += " active";
    }

    return (
      <li className={title}
        style={{ listStyleType: "none" }}
        onClick={this.handleClick}>
        #{`${this.props.channel}`}
      </li>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectChannel : selectChannel }, dispatch );
}


export default connect(mapStateToProps, mapDispatchToProps)(Channel);
