// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { useEffect } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDGe6-WCWjd3u_PsEp-cEBvTk1VQbNVcDU",
	authDomain: "moolah-3b093.firebaseapp.com",
	projectId: "moolah-3b093",
	storageBucket: "moolah-3b093.appspot.com",
	messagingSenderId: "609885956642",
	appId: "1:609885956642:web:21462df95597fe494ef87b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
