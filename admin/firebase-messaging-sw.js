importScripts("https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js");

 //the Firebase config object 
 const firebaseConfig = {
    apiKey: "AIzaSyAXKfV4o5v4S3kJ19aVhW0l9jprfbLcM0Y",
    authDomain: "chargeasy-414a3.firebaseapp.com",
    projectId: "chargeasy-414a3",
    storageBucket: "chargeasy-414a3.appspot.com",
    messagingSenderId: "902552524225",
    appId: "1:902552524225:web:b6d3f9f8f1e4746c660b40"
  };

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();


messaging.onBackgroundMessage(function(payload) {
    console.log('Received background message ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});