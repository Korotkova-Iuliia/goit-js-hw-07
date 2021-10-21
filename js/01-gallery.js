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

  const imageOriginalBig = galleryItems
    .map(({ original, description }) => {
      return `
             <div class="gallery__item">
           <img
           class="gallery__image-big"
           src="${original}"
           alt="${description}"
          />
           </div>
          `;
    })
    .join('');

  imageContainer.insertAdjacentHTML('beforeend', imageOriginalBig);
  //   console.log(imageOriginalBig);
  const getImageBig = document.querySelector('.gallery__image-big');
  // console.log(image)
  const scrImageBig = getImageBig.getAttribute('src');
  const altImageBig = getImageBig.getAttribute('alt');
  //   console.log(getImageBig);
  //   console.log(scrImageBig);
  //   console.log(altImageBig);

  const instance = basicLightbox.create(`
            //   <img src="${scrImageBig}" width="800" height="600">

    `);
  //  return;
  instance.show();
}
