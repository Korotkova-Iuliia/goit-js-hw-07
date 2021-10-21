import { galleryItems } from './gallery-items.js';
// Change code below this line
// import * as basicLightbox from 'basiclightbox';
const imageContainer = document.querySelector('.gallery');
imageContainer.addEventListener('click', onImageContainerClick);
const imagesPreviewMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `
     <div class="gallery__item">
     <img
     class="gallery__image gallery__link"
     src="${preview}"
      src="${original}"
     alt="${description}"
    />
    </div>
    `;
  })
  .join('');

imageContainer.insertAdjacentHTML('beforeend', imagesPreviewMarkup);

const imageSmall = document.querySelectorAll('.gallery__image');
imageSmall.forEach((image) => imageContainer.getAttribute('src'));
console.log(imageSmall);

// const scrImageSmallNew = document.querySelector('[src="${original}"]');
// console.log(scrImageSmallNew);

// const scrImageSmall = imageSmall.getAttribute('src');
// const altImageSmall = imageSmall.getAttribute('alt');

// console.log(scrImageSmall);
// console.log(altImageSmall);
// console.log(document.querySelectorAll('.gallery__image'));
// const getImageBig = document.querySelector(
//   '.gallery__image-big[src="${original}"]'
// );
// const scrImageBig = getImageBig.getAttribute('src');
// const altImageBig = getImageBig.getAttribute('alt');
// console.log(scrImageBig);
// console.log(getImageBig);
// console.log(altImageBig);
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
  const getImageBig = document.querySelectorAll('.gallery__image-big');
  getImageBig.forEach(
    (image) => image.getAttribute('src')
    // console.log(image)
  );
  //   const scrImageBig = getImageBig.getAttribute('src');
  //   const altImageBig = getImageBig.getAttribute('alt');
  //   console.log(getImageBig);
  //   console.log(scrImageBig);
  //   console.log(altImageBig);
  // for (let i = 0; i < array.length; i++) {
  //     const element = array[i];

  // }

  const instance = basicLightbox.create(`
          //   <img src="${scrImageBig}" width="800" height="600">

  `);
  instance.show();
}
