import { galleryItems } from './gallery-items.js';
// Change code below this line
const imageContainer = document.querySelector('.gallery');
imageContainer.addEventListener('click', onImageContainerClick);

const imagesPreviewMarkup = galleryItems
  .map(({ preview, description }) => {
    return `
     <div class="gallery__item">
     <img
     class="gallery__image gallery__link"
     src="${preview}"
     alt="${description}"
    />
    </div>
    `;
  })
  .join('');

imageContainer.insertAdjacentHTML('beforeend', imagesPreviewMarkup);

function onImageContainerClick(e) {
  const isImageEl = e.target.classList.contains('gallery__image');

  if (!isImageEl) {
    return;
  }
  const altImageSmall = e.target.getAttribute('alt');
  for (let i = 0; i < galleryItems.length; i++) {
    const galleryItem = galleryItems[i];
    const srcGalleryItem = galleryItem.original;
    const altGalleryItem = galleryItem.description;
    if (altGalleryItem === altImageSmall) {
      const instance = basicLightbox.create(`
              <img src="${srcGalleryItem}" width="800" height="600">

      `);

      return instance.show();
    }
  }
}
