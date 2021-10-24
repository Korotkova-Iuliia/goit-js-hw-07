import { galleryItems } from './gallery-items.js';
// Change code below this line
// вариант 3
const imageContainer = document.querySelector('.gallery__item');

const imagesPreviewMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `
     <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
`;
  })
  .join('');

imageContainer.insertAdjacentHTML('beforeend', imagesPreviewMarkup);
imageContainer.addEventListener('click', onImageContainerClick);
console.log(imageContainer);

function onImageContainerClick(e) {
  e.preventDefault();
  const getUrl = getImageUrl(e.target);
  console.log(getUrl);

  console.log(e.currentTarget.getAttribute('href'));
  console.log(e.target.getAttribute('href'));
  const url = document.querySelector('.gallery__link[href]').textContent;
  console.log(url);
  if (e.target.nodeName !== 'IMG') {
    return;
  }

  let instance = '';

  const options = {
    once: true,
    // open Modal
    onShow: (instance) => {
      window.addEventListener('keydown', eventHandler);
    },
    // cloze Modal
    onClose: (instance) => {
      window.removeEventListener('keydown', eventHandler);
    },
  };

  const altImageSmall = e.target.getAttribute('alt');
  for (let i = 0; i < galleryItems.length; i++) {
    const galleryItem = galleryItems[i];
    const srcGalleryItem = galleryItem.original;
    const altGalleryItem = galleryItem.description;
    if (altGalleryItem === altImageSmall) {
      instance = basicLightbox.create(
        `
      <img src="${srcGalleryItem}" width="800" height="600">
`,
        options
      );
    }
  }
  instance.show();
}

function eventHandler(e) {
  if (e.key === 'Escape') {
    instance.close();
    return;
  }
}

// вариант 2
// import { galleryItems } from './gallery-items.js';
// // Change code below this line
// // вариант 2
// const imageContainer = document.querySelector('.gallery');
// imageContainer.addEventListener('click', onImageContainerClick);

// const imagesPreviewMarkup = galleryItems
//   .map(({ preview, original, description }) => {
//     return `
//     <div class="gallery__item">
//   <a class="gallery__link" href="${original}">
//     <img
//       class="gallery__image"
//       src="${preview}"
//       data-source="${original}"
//       alt="${description}"
//     />
//   </a>
// </div>`;
//   })
//   .join('');

// imageContainer.insertAdjacentHTML('beforeend', imagesPreviewMarkup);

// let instance = '';

// const options = {
//   once: true,
//   // open Modal
//   onShow: (instance) => {
//     window.addEventListener('keydown', eventHandler);
//   },
//   // cloze Modal
//   onClose: (instance) => {
//     window.removeEventListener('keydown', eventHandler);
//   },
// };

// function onImageContainerClick(e) {
//   e.preventDefault();

//   const isImageEl = e.target.classList.contains('gallery__image');
//   if (!isImageEl) {
//     return;
//   }
//   const url = document.querySelector('.gallery__link[href]').textContent;
//   console.log(url);
//   const altImageSmall = e.target.getAttribute('alt');
//   for (let i = 0; i < galleryItems.length; i++) {
//     const galleryItem = galleryItems[i];
//     const srcGalleryItem = galleryItem.original;
//     const altGalleryItem = galleryItem.description;
//     if (altGalleryItem === altImageSmall) {
//       instance = basicLightbox.create(
//         `
//       <img src="${srcGalleryItem}" width="800" height="600">
// `,
//         options
//       );
//     }
//   }
//   instance.show();
// }

// function eventHandler(e) {
//   if (e.key === 'Escape') {
//     instance.close();
//     return;
//   }
// }

// вариант 1
// const imageContainer = document.querySelector('.gallery');
// imageContainer.addEventListener('click', onImageContainerClick);

// const imagesPreviewMarkup = galleryItems
//   .map(({ preview, description }) => {
//     return `
//      <div class="gallery__item">
//      <img
//      class="gallery__image gallery__link"
//      src="${preview}"
//      alt="${description}"
//     />
//     </div>
//     `;
//   })
//   .join('');

// imageContainer.insertAdjacentHTML('beforeend', imagesPreviewMarkup);

// function onImageContainerClick(e) {
//   const isImageEl = e.target.classList.contains('gallery__image');

//   if (!isImageEl) {
//     return;
//   }
//   const altImageSmall = e.target.getAttribute('alt');
//   for (let i = 0; i < galleryItems.length; i++) {
//     const galleryItem = galleryItems[i];
//     const srcGalleryItem = galleryItem.original;
//     const altGalleryItem = galleryItem.description;
//     if (altGalleryItem === altImageSmall) {
//       const instance = basicLightbox.create(`
//               <img src="${srcGalleryItem}" width="800" height="600">

//       `);

//       return instance.show();
//     }
//   }
// }
