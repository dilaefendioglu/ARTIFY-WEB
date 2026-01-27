import { fetchImages } from "./api.js";
import { renderImages } from "./render.js";


const searchInput = document.getElementById("searchInput");

if (searchInput) {
  searchInput.addEventListener("keydown", async (event) => {
    if (event.key === "Enter") {
      const query = searchInput.value.trim();
      if (!query) return;

          sessionStorage.setItem("lastSearch", query); //aramayı saklıyoruz.

      const images = await fetchImages(query);
      renderImages(images);
    }
  });
}

const detailModal = document.getElementById("detailModal");
const detailImage = document.getElementById("detailImage");
const closeBtn = document.getElementById("closeBtn");

export function openDetail(imageUrl)  {
  detailImage.src = imageUrl;
  detailModal.classList.remove("hidden");
  document.body.style.overflow = "hidden"; 
 }
  
 if(closeBtn){
  closeBtn.addEventListener("click" , () =>{
   detailModal.classList.add("hidden");
   detailImage.src = "";
  
  });
 }

import { fetchImages } from "./api.js";
import { renderImages } from "./render.js";


const searchInput = document.getElementById("searchInput");

if (searchInput) {
  searchInput.addEventListener("keydown", async (event) => {
    if (event.key === "Enter") {
      const query = searchInput.value.trim();
      if (!query) return;

          sessionStorage.setItem("lastSearch", query); //aramayı saklıyoruz.

      const images = await fetchImages(query);
      renderImages(images);
    }
  });
}

const detailModal = document.getElementById("detailModal");
const detailImage = document.getElementById("detailImage");
const closeBtn = document.getElementById("closeBtn");

export function openDetail(imageUrl)  {
  detailImage.src = imageUrl;
  detailModal.classList.remove("hidden");
  document.body.style.overflow = "hidden"; 
 }
  
 if(closeBtn){
  closeBtn.addEventListener("click" , () =>{
   detailModal.classList.add("hidden");
   detailImage.src = "";
  
  });
 }

 