// TODO: add and export your own actions
export const GET_MESSAGES = "GET_MESSAGES";

// TODO: let's get message
export function getMessages(channel) {
  return fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`)
    .then(response => response.json())
    .then((data) => {
      return {
        type: GET_MESSAGES,
        payload: data
      };
    });
}

