importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAB6FbsDLh4xq6ikvsSFFrDLYFVDaYB978",
  authDomain: "jee-tracker-6b67d.firebaseapp.com",
  projectId: "jee-tracker-6b67d",
  storageBucket: "jee-tracker-6b67d.firebasestorage.app",
  messagingSenderId: "14514591368",
  appId: "1:14514591368:web:9e72203c576dfaa5e9713d"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification?.title || "⚠️ JEE Tracker Reminder";
  const notificationOptions = {
    body: payload.notification?.body || "You did not post your study log yesterday! Please update now.",
    icon: "https://cdn-icons-png.flaticon.com/512/3588/3588658.png"
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
