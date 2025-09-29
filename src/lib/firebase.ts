import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  "projectId": "studio-1948386112-e1436",
  "appId": "1:316511192927:web:098439543cf38bcf1798ea",
  "apiKey": "AIzaSyCF_hTu8Jdl5FTJ_4KfVCGgezwWb5j6f5Q",
  "authDomain": "studio-1948386112-e1436.firebaseapp.com",
  "measurementId": "",
  "messagingSenderId": "316511192927"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export { app, auth };
