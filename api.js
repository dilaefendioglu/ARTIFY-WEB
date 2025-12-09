export async function fetchLexicaImages(query) { //await kullanıcaz await yalnız async function ile calısır. Baska dosyalardada calıssın diye export ettik
  const url = `https://lexica.art/api/v1/search?q=${query}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {  
      throw new Error("API ISTEGI BASARİSİZ");
    }

    const data = await response.json(); //“API’den gelen JSON veriyi response.json() ile parse ediyorum.”
    return data.images; // Lexica'nın döndürdüğü images listesi

  } catch (error) {
    console.error("Lexica API Error:", error);
    return []; //bos döndürüyoruz
  }
}
