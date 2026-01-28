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

export function openDetail(imageUrl)  {
  detailImage.src = imageUrl;
  detailModal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
 }

  const closeBtn = document.getElementById("closeBtn");
  const favBtn = document.getElementById("favBtn");
  const downloadBtn = document.getElementById("downloadBtn");

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

 const gofavBtn = document.getElementById("gofavBtn");
 if (gofavBtn) {
  gofavBtn.addEventListener("click" ,() => {
    window.location.href = "favorites.html"
  } )
 }

