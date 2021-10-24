import { galleryItems } from './gallery-items.js';
// Change code below this line
// вариант 2
const imageContainer = document.querySelector('.gallery');
imageContainer.addEventListener('click', onImageContainerClick);
// console.log(imageContainer);

const imagesPreviewMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `
    <div class="gallery__item">
  <a id="aaa" class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
  })
  .join('');

imageContainer.insertAdjacentHTML('beforeend', imagesPreviewMarkup);

let instance = '';

const options = {
  once: true,
  onShow: (instance) => {
    console.log('open');
    window.addEventListener('keydown', eventHandler);

    console.log('addEventListener');
  },
  onClose: (instance) => {
    console.log('close');
    window.removeEventListener('keydown', eventHandler);
    console.log('removeEventListener');
  },
};
instance = basicLightbox.create(
  `
    <div class="modal">
           instance.element().querySelector('img').onclick = instance.close;
 <a>Close</a>
    </div>
`,
  options
);
function onImageContainerClick(e) {
  e.preventDefault();
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
    }
  }
  instance.show();
}

function eventHandler(e) {
  if (e.key === 'Escape') {
    console.log('key', e.key);
    instance.close();
    return;
  }
}

/

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
