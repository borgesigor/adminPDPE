import axios from 'axios'

const hostFetch = `http://127.0.0.1:3333`

const instance = axios.create({
  baseURL : hostFetch,
  headers: {
    'Content-Type': "application/json",
    'timeout': 1000
  }
});

export default instance