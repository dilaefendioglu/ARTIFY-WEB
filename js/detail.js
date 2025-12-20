const params = new URLSearchParams(window.location.search);
const imageUrl = params.get("img");

const detailImage = document.getElementById("detailImage");

if (imageUrl) {
  detailImage.src = imageUrl;
}


const closeBtn = document.getElementById("closeBtn");

if(closeBtn){
closeBtn.addEventListener("click" , () => {
    window.location.href= "dashboard.html";
});
}