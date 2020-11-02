const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let photosArray = [];

// Usplash API
const count = 10;
const apiKey = "RoiRgrLXbZn_6PhUivFDmM7YgBGszloQGPx3A8gFOco";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Create Elements for links and photos add to DOM
function displayPhotos() {
    // Run function for each object in photoArray 
    photosArray.forEach((photo) => {
        // create <a> to link unsplash
        const item = document.createElement('a');
        item.setAttribute('href', photo.links.html);
        item.setAttribute('target', '_blank');
        // create <img> for photo
        const img = documemt.createElement('img');
        img.setAttribute('src', photo.urls.regular);
        img.setAttribute('alt', photo.alt_description);
        img.setAttribute('title', photo.alt_description);
        // Put <img> inside <a>, then put both inside imageContainer Element
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}
// Get photos from Unsplash API
async function getPhotos() {
    try{
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();
    } catch (error){
        //Catch error here
    }
}

//on load
getPhotos();