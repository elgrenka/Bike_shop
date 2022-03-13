// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDJt5soXPQa1-9eKKpC0_zBYmhhGkQejMg",
//   authDomain: "bike-shop-a2ebe.firebaseapp.com",
//   databaseURL: "https://bike-shop-a2ebe-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "bike-shop-a2ebe",
//   storageBucket: "bike-shop-a2ebe.appspot.com",
//   messagingSenderId: "916752060130",
//   appId: "1:916752060130:web:c0df9d3999a8922c3318bb"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);


export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyDJt5soXPQa1-9eKKpC0_zBYmhhGkQejMg",
    authDomain: "bike-shop-a2ebe.firebaseapp.com",
    databaseURL: "https://bike-shop-a2ebe-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "bike-shop-a2ebe",
    storageBucket: "bike-shop-a2ebe.appspot.com",
    messagingSenderId: "916752060130",
    appId: "1:916752060130:web:c0df9d3999a8922c3318bb"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
