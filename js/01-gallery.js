import { galleryItems } from './gallery-items.js';
// Change code below this line
const imageContainer = document.querySelector('.gallery');
imageContainer.addEventListener('click', onImageContainerClick);
const imagesMarkup = galleryItems
  .map(({ preview, description }) => {
    return `
     <div class="gallery__item">
     <img
     class="gallery__image"
     src="${preview}" 
     alt="${description}"
    />
    </div>
    `;
  })
  .join('');
imageContainer.insertAdjacentHTML('beforeend', imagesMarkup);
function onImageContainerClick(e) {}
console.log(galleryItems);
