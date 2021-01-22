import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Channel from './channel';


class ChannelList extends Component {

  renderChannel = () => {
    const channels = this.props.channels.map (channel =>
       <Channel key={channel} channel={channel}/>
    )
    return channels;
  }

  render() {
    console.log(this.props);
    return (
      <div className="channel-list">
        <h6><strong>Redux Chat</strong></h6>
        <ul className="channel-list">
          { this.renderChannel() }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    channels: state.channels,
    selectedChannel : state.selectedChannel
  };
}

export default connect(mapStateToProps)(ChannelList);
