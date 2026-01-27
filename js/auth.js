import { auth } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

// KAYIT İŞLEMİ
export function register(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

// GİRİŞ İŞLEMİ
export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}
