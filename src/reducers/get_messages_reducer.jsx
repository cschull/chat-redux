import { GET_MESSAGES, NEW_MESSAGE } from '../actions/index';

export default function (state = null, action) {
  switch (action.type) {
    case GET_MESSAGES: {
      // the action's payload is data from the API
      // the object has key messags that is passed to the action
      return action.payload.messages;
    }
    case NEW_MESSAGE: {
      const copiedState = state.slice(0);
      copiedState.push(action.payload);
      return copiedState;
      // console.log(`this is the current ${state}`);
    }
    default: {
      return state;
    }
  }
}
