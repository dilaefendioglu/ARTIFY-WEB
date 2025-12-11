// REGISTER KISMI
import { register, login } from "./auth.js";
import { auth } from "./firebase.js";
import { updateProfile } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { fetchImages } from "./api.js";
import { renderImages } from "./render.js";

// REGISTER BUTONU
const registerBtn = document.getElementById("registerBtn");

if (registerBtn) {
  registerBtn.addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    register(email, password)
      .then(() => {
        // Kullanıcı profilini güncelle (ad soyad)
        updateProfile(auth.currentUser, {
          displayName: name,
        });

        alert("Kayıt başarılı!");
        window.location.href = "login.html";
      })
      .catch((err) => alert(err.message));
  });
}

// LOGIN BUTONU
const loginBtn = document.getElementById("loginBtn");

if (loginBtn) {
  loginBtn.addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    login(email, password)
      .then(() => {
        alert("Giriş başarılı!");
        window.location.href = "dashboard.html"; // başarılı giriş sonrası ana sayfa
      })
      .catch((err) => {
        if (err.code === "auth/invalid-credential") {
          alert("Email veya şifre hatalı.");
        } else {
          alert(err.message);
        }
      });
  });
}

//SEARCH BUTONU
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");

if (searchBtn) {
  searchBtn.addEventListener("click", async () => {
    const query = searchInput.value.trim(); //trim kullanıcının yazmis oldugu sorgunun bastaki ve sondaki bosluklarini siler.
    if (!query) return alert("Enter image description");
    
    const images = await fetchImages(query); 
    renderImages(images);
  });
}