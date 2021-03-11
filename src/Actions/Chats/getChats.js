import axios from 'axios';
import * as str from '../index.js';

export const getChats = (data, successFunc, errorFunc) => (dispatch) => {

    axios.get(
        `https://api.chatengine.io/chats/`, 
        { headers: {
            'Project-ID': data.projectID,
            'User-Name': data.userName,
            'User-Secret': data.userSecret,
        }}
    )

    .then((response) => {
        successFunc && successFunc(response)

        dispatch({
            type: str.SIGN_IN_OK,
            payload: data
        });
    })

    .catch((error) => {
      errorFunc && errorFunc(error)
    });
}