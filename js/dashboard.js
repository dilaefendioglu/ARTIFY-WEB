import { fetchImages } from "./api.js";
import { renderImages } from "./render.js";


  const searchInput = document.getElementById("searchInput");
  const detailModal = document.getElementById("detailModal");
  const detailImage = document.getElementById("detailImage");
  const closeBtn = document.getElementById("closeBtn");
  const downloadBtn = document.getElementById("downloadBtn");
  const favBtn = document.getElementById("favBtn");
  const EMPTY_HEART = "../image/empty_fav.png";
  const FULL_HEART = "../image/full_fav.png"; 
  const gofavBtn = document.getElementById("gofavBtn");


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

export function openDetail(imageUrl)  {
  detailImage.src = imageUrl;
 // Modal açıldığında kalbin durumunu kontrol et
  const favs = JSON.parse(localStorage.getItem("artify_favs")) || [];
  const favIcon = favBtn.querySelector("img");
  
  if (favs.includes(imageUrl)) {
    favIcon.src = FULL_HEART;
  } else {
    favIcon.src = EMPTY_HEART;
  }

  detailModal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
 }


 if(closeBtn){
  closeBtn.addEventListener("click" , () =>{
   detailModal.classList.add("hidden");
   detailImage.src = "";
   document.body.style.overflow = "auto";
  
  });
 } 


if (downloadBtn) {
  downloadBtn.addEventListener("click", async () => {
    const imageUrl = detailImage.src;

    if (!imageUrl) return;

    try {
      // Görseli fetch ile çek (Blob olarak)
      const response = await fetch(imageUrl);
      const blob = await response.blob();

      //  Blob için bir URL oluştur
      const url = window.URL.createObjectURL(blob);

      // 3. İndirme işlemini tetikle
      const link = document.createElement("a");
      link.href = url;
      link.download = "artify-art.jpg";
      document.body.appendChild(link);
      link.click();

      // 4. Belleği temizle
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("İndirme hatası:", error);
      // Hata olursa en azından yeni sekmede açmayı dene
      window.open(imageUrl, "_blank");
    }
  });
}


  if(favBtn){
    favBtn.addEventListener("click", () => {
     const favIcon = favBtn.querySelector("img");    
     const currentSrc = favIcon.getAttribute("src"); 
  if(currentSrc.includes(EMPTY_HEART)) {
    favIcon.src= FULL_HEART;
   addToFavorites(detailImage.src);
  console.log("Favorilere eklendi");
  }

    else{
      favIcon.src=EMPTY_HEART;
    removeFromFavorites(detailImage.src);
    console.log("Favorilerden çıkarıldı");
    }
    })
  }

 function addToFavorites(url) {
  let favs = JSON.parse(localStorage.getItem("artify_favs")) || [];
  if (!favs.includes(url)) {
    favs.push(url);
    localStorage.setItem("artify_favs", JSON.stringify(favs));
  }
}

function removeFromFavorites(url) {
  let favs = JSON.parse(localStorage.getItem("artify_favs")) || [];
  favs = favs.filter(item => item !== url);
  localStorage.setItem("artify_favs", JSON.stringify(favs));
}


 if (gofavBtn) {
  gofavBtn.addEventListener("click" ,() => {
    window.location.href = "favorites.html"
  } )
 }



