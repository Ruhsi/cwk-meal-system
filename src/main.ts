import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtTyQPrEhICdG22oYSJAETstz_g2Opl1o",
  authDomain: "cwk-apps-78502.firebaseapp.com",
  projectId: "cwk-apps-78502",
  storageBucket: "cwk-apps-78502.appspot.com",
  messagingSenderId: "866241394578",
  appId: "1:866241394578:web:0edab365e62ecb0924f34b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
