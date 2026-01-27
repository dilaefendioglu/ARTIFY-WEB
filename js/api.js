  
  export async function fetchImages(query) { 

  const apiKey = "53672880-c40ce9e903a2e7bd62c0b5478";
  const randomPage = Math.floor(Math.random() * 5) + 1;
const url = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(query)}&image_type=photo&per_page=60&page=${randomPage}`;


  try {
    const response = await fetch(url);

    if (!response.ok) {  
      throw new Error("API ISTEGI BASARİSİZ");
    }

    const data = await response.json(); //“API’den gelen JSON veriyi response.json() ile parse ediyorum.”
    
    // 🔀 sonuçları karıştır (shuffle)
    const shuffledImages = data.hits.sort(() => Math.random() - 0.5);
    return shuffledImages;

  } catch (error) {
    console.error("Pixabay API Error:", error);
    return []; //bos döndürüyoruz
  }
}


