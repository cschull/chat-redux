import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class ChannelList extends Component {

  renderChannel = () => {
    const channels = this.props.channels.map (channel =>
       <li className="channel" key={channel} style={{listStyleType: "none"}}>#{channel}</li>
    )
    return channels
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
    channels: state.channels
  };
}

export default connect(mapStateToProps)(ChannelList);
