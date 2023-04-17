import { io } from 'socket.io-client';

const URL ='ws://localhost:4000/client';

export const socket = io(URL,{
  // withCredentials: true,
  extraHeaders: {
    "my-custom-header": "abcd"
  },
});