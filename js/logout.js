import { auth } from "/js/firebase.js";
import {signOut} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

const logoutBtn = document.getElementById("logoutBtn");

if(logoutBtn)
{
logoutBtn.addEventListener("click" , async () => {
    try {          //bu kodu calistirmayı dene
        await signOut(auth)
        window.location.href = "index.html";
        }

        catch(error) {   // catch=hata yakalarsan 
        console.error(error) ;
    };

  });
}