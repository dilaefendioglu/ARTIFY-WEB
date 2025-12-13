  
  export async function fetchImages(query) { 

  const apiKey = "53672880-c40ce9e903a2e7bd62c0b5478";
const url = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(query)}&image_type=photo&per_page=100`;


  try {
    const response = await fetch(url);

    if (!response.ok) {  
      throw new Error("API ISTEGI BASARİSİZ");
    }

    const data = await response.json(); //“API’den gelen JSON veriyi response.json() ile parse ediyorum.”
    return data.hits; // Pİxabay'ın döndürdüğü images listesi

  } catch (error) {
    console.error("Pixabay API Error:", error);
    return []; //bos döndürüyoruz
  }
}


