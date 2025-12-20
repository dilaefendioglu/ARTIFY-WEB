export function renderImages(images) {  // dışarıdan gelen görsel listesini ekrana basmak için tanımlanır.

 const container = document.getElementById("imageContainer");
 container.innerHTML = "";   // Yeni aramada eski sonuçlar üst üste binmesin diye temizlik
 images.forEach((img) => {   // Her bir görsel için tek tek dönüyoruz

   const imageElement = document.createElement("img");
  imageElement.src = img.webformatURL; // resmi göster
  imageElement.style.display = "none";

imageElement.onload = () => {
  imageElement.style.display = "block";
};

imageElement.onerror = () => {
  imageElement.remove(); // bozuk resim hiç görünmesin
};

imageElement.addEventListener("click", () => {
      window.location.href = `detail.html?img=${encodeURIComponent(imageElement.src)}`;
  

});


   container.appendChild(imageElement); //Oluşturduğu <img>’yi HTML’e ekler → EKRANDA GÖRÜNÜR.

  });
}
