import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createMessage } from '../actions';


class MessageForm extends Component {
  constructor(props) {
    super(props);

    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createMessage(this.props.selectedChannel, this.props.currentUser, this.state.value);
    this.setState({ value: '' });
  }

  render() {
    return (
      <form style={{ display: "flex" }} onSubmit={this.handleSubmit}>
        <label>
          Send a message:
          <input style={{ width: "80%" }} onChange={this.handleChange} type="text" value={this.state.value} className="form-control"/>
        </label>
        <input style={{ width: "20%" }} type="submit" value="send" className="form-control"/>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { createMessage: createMessage }, dispatch);
}

function mapStateToProps(state) {
  return {
    selectedChannel: state.selectedChannel,
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
