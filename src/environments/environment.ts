// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig:{
    apiKey: "AIzaSyCkai3mZ3VAglb_S40AVd72OTBTh1HzmBY",
    authDomain: "todo-list-project-d9a92.firebaseapp.com",
    databaseURL: "https://todo-list-project-d9a92-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "todo-list-project-d9a92",
    storageBucket: "todo-list-project-d9a92.appspot.com",
    messagingSenderId: "301529909039",
    appId: "1:301529909039:web:aeb856f86e8a436a3583da",
    measurementId: "G-7614HWTE0X"
  }

};
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
