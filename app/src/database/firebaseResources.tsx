import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

export const AuthComponent = (StyledFirebaseAuth as any).default
  ? (StyledFirebaseAuth as any).default
  : StyledFirebaseAuth;

  export const firebaseConfig = {
    apiKey: "AIzaSyDIDd05dX-Zl2HWu_aPqJ2Mj-s-o3tFKAg",
    authDomain: "roboteducation-bb136.firebaseapp.com",
    projectId: "roboteducation-bb136",
    storageBucket: "roboteducation-bb136.appspot.com",
    messagingSenderId: "506678935284",
    appId: "1:506678935284:web:f3d915095674d136ed68a1",
    measurementId: "G-372V8E43DV"
  };

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);
export const analytics = getAnalytics(app);

export const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: "/",
  // We will display Google and Facebook as auth providers.
  signInOptions: [GoogleAuthProvider.PROVIDER_ID],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false,
  },
};
