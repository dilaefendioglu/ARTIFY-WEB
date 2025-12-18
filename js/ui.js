// REGISTER KISMI
import { register, login } from "./auth.js";
import { auth } from "./firebase.js";
import { updateProfile } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { fetchImages } from "./api.js";
import { renderImages } from "./render.js";
import { signOut } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";


//önce divleri bulalım
const loginCard = document.getElementById("loginCard");
const registerCard = document.getElementById("registerCard");

//simdi tıklanmaları bulalım
const goRegister = document.getElementById("goRegister");
const goLogin = document.getElementById("goLogin");

// REGISTER BUTONU
const registerBtn = document.getElementById("registerBtn");

if (registerBtn) {
  registerBtn.addEventListener("click", async () => {
    const name = document.getElementById("registerName").value;
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;

  try{
    await register(email ,password);
    await updateProfile(auth.currentUser, {displayName : name});
    alert("Kayıt başarılı");

        registerCard.classList.remove("active");
        loginCard.classList.add("active");
} catch (err) {
        alert(err.message);
      }
    });
}


// LOGIN BUTONU
const loginBtn = document.getElementById("loginBtn");

if (loginBtn) {
  loginBtn.addEventListener("click", async () => {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

  try{
    await login(email,password);
    window.location.href =  "dashboard.html";
  } catch(err) {
    alert("Email veya şifre hatalı");
}
});
  
} 

//Kart Geçişleri
if(goRegister && goLogin)
{
  goRegister.addEventListener("click" ,() =>{
  registerCard.classList.add("active")
  loginCard.classList.remove("active")
  })

  goLogin.addEventListener("click" ,() =>{
    loginCard.classList.add("active")
    registerCard.classList.remove("active")
  })
}


// ===== SEARCH (DASHBOARD) =====
const searchInput = document.getElementById("searchInput");

if (searchInput) {
  searchInput.addEventListener("keydown", async (event) => {
    if (event.key === "Enter") {
      const query = searchInput.value.trim();
      if (!query) return;

      const images = await fetchImages(query);
      renderImages(images);
    }
  });
}
