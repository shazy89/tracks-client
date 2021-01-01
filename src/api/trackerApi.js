import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const instance = axios.create({
   baseURL: 'http://04c5e8c9393f.ngrok.io'
});

instance.interceptors.request.use(
   () => {},
   (err) => {
      return Promise.reject(err);
   }
)

export default instance;