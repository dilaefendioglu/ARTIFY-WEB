
export function renderLexicaImages(images) {  // dışarıdan gelen görsel listesini ekrana basmak için tanımlanır.

 const container = document.getElementById("imageContainer");
 container.innerHTML = "";   // Yeni aramada eski sonuçlar üst üste binmesin diye temizlik
 images.forEach((img) => {   // Her bir görsel için tek tek dönüyoruz

    const imageElement = document.createElement("img");
    imageElement.src = img.srcSmall;
    imageElement.alt = img.prompt;
    container.appendChild(imageElement);

  });
}
