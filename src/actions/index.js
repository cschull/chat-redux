// TODO: add and export your own actions
export const GET_MESSAGES = "GET_MESSAGES";
export const NEW_MESSAGE = "NEW_MESSAGE";

const BASE_URL = 'https://wagon-chat.herokuapp.com';

// TODO: let's get message
export function getMessages(channel) {
  return fetch(`${BASE_URL}/${channel}/messages`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      return {
        type: GET_MESSAGES,
        payload: data
      };
    });
}


export function createMessage(channel, author, content) {
  // TODO
  const body = {channel: channel, author: author, content: content};
  const url = `${BASE_URL}/${channel}/messages`
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      'Accept' : 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(r => r.json());

  return {
    type: NEW_MESSAGE,
    payload: promise
  };
}
