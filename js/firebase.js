import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAiaTNBjfxg6-Wmr1PNi0pAZP3wSGky2GQ",
  authDomain: "artifyai-web-e4976.firebaseapp.com",
  projectId: "artifyai-web-e4976",
  storageBucket: "artifyai-web-e4976.firebasestorage.app",
  messagingSenderId: "646995479350",
  appId: "1:646995479350:web:930688cc1e36bb8f9f4197"
};

// Firebase Başlat
const app = initializeApp(firebaseConfig);

// Auth servisini dışa aktarıyoruz
export const auth = getAuth(app);

