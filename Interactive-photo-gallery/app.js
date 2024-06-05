// Array containing the gallery data
const galleryData = [
    {
        imgSrc: "./assets/picture.png",
        title: "FENNEC FOX",
        location: "India",
    },
    {
        imgSrc: "./assets/picture1.png",
        title: "HUMPBACK WHALE",
        location: "south africa",
    },
    {
        imgSrc: "./assets/picture2.png",
        title: "COMMON,BROWN BABOON",
        location: "south africa"
    },
    {
        imgSrc: "./assets/picture3.png",
        title: "SPOTTED DEER",
        location: "amazon",
    },
];

// Function to create gallery cards
function createGalleryCards() {
    const galleryWrapper = document.querySelector(".galleryWrapper");
    galleryData.forEach((data) => {
        const galleryCard = document.createElement("div");
        galleryCard.classList.add("galleryCard");

        galleryCard.innerHTML = `
    <div class="imageWrapper"> <img src="${data.imgSrc}" alt="${data.title}" /></div>
    <div class="galleryOverlay">
      <div class="contents">
        <h1>${data.title.split(" ").join("<br>")}</h1>
        <small class="location">${data.location}</small>
        <p class="more"> <span> Know More </span> <i class="fa-solid fa-arrow-right-long"></i></p>
        
      </div>
    </div>
  `;

        galleryWrapper.appendChild(galleryCard);
    });
}

// Call the function to create gallery cards on page load
document.addEventListener("DOMContentLoaded", createGalleryCards);