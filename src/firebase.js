import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyD2yUmAytc8sXhWOqU3UpC9PgmO5fPWSBw",
    authDomain: "chat-cbe08.firebaseapp.com",
    projectId: "chat-cbe08",
    storageBucket: "chat-cbe08.appspot.com",
    messagingSenderId: "502874904992",
    appId: "1:502874904992:web:787cffe973821dfab76cc5"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage()
