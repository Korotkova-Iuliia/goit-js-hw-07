import { galleryItems } from './gallery-items.js';
// Change code below this line
// вариант 2
const imageContainer = document.querySelector('.gallery');
imageContainer.addEventListener('click', onImageContainerClick);
// console.log(imageContainer);
const keyDown = window.addEventListener('keydown', event);
function event() {
  console.log(keyDown);
  console.log('adfsrer');
}

const imagesPreviewMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
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

function onImageContainerClick(e) {
  const url = getImageUrl(e.target);
  console.log(url);

  //   e.preventDefault();
  //   const isImageEl = e.target.classList.contains('gallery__image');

  if (!isImageEl) {
    return;
  }
  function onModalOpen(e) {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
      return;
    }
    const url = getImageUrl(e.target);
    instance = basicLightbox.create(
      `<img src="${url}" width="800" height="600">`,
      options
    );
    instance.show();
  }
}
//   console.log('sgadaers');

//   let instance = '';
//   const options = {
//     once: true,

//     onShow: (instance) => {
//       console.log('open');
//       window.addEventListener('keydown', eventHandler);
//       window.addEventListener('click', eventHandler);
//       console.log('addEventListener');
//     },

//     onClose: (instance) => {
//       console.log('close');
//       window.removeEventListener('keydown', eventHandler);
//       console.log('removeEventListener');
//     },
//   };
//   function eventHandler(e) {
//     if (e.key === 'Escape') {
//       console.log('key', e.key);
//       instance.close();
//       return;
//     }
// }

// вариант с модалкой  - 1 рабочий, все слушатели снимаются (по идее)
//   function onModalOpen(e) {
// e.preventDefault();
//     if (e.target.nodeName !== 'IMG') {
//       return;
//     }
//     const url = getImageUrl(e.target);
//     instance = basicLightbox.create(
//       `<img src="${url}" width="800" height="600">`,
//       options
//     );
// вешаем слушателей на клик и на esc при октрытии модалки
// instance.show();
//   }
// }

// ваиант с модалкой
//   const instance = basicLightbox.create(
//     `
//       <div class="modal">
//            <p>
//               Your first lightbox with just a few lines of code.
//               Yes, it's really that simple.
//           </p>
//           <a>Close</a>
//       </div>
//   `,
//     {
//       onShow: (instance) => {
//         instance.element().querySelector('a').onclick = instance.close;
//       },
//     }
//   );
//   instance.show();

//   instance.show(() => console.log('lightbox now visible'));
//   //   instance.close(() => console.log('lightbox not visible anymore'));
//   //   instance.show();
//   console.log(instance.show());

// instance.show();

// основа 2
// let instance = '';
// const options = {
//   once: true,
//   onShow: (instance) => {
//     console.log('open');
//     window.addEventListener('keydown', onImageContainerClick);
//     console.log('addEventListener');
//   },

//   onClose: (instance) => {
//     console.log('close');
//     window.removeEventListener('keydown', onImageContainerClick);
//     console.log('removeEventListener');
//   },
// };
// function onImageContainerClick(e) {
//   if (e.key === 'Escape') {
//     console.log('key', e.key);
//     instance.close();
//     return;
//   }
// }
// // вариант с модалкой  - 1 рабочий, все слушатели снимаются (по идее)
// function onModalOpen(e) {
//   e.preventDefault();
//   if (e.target.nodeName !== 'IMG') {
//     return;
//   }
//   const url = getImageUrl(e.target);
//   instance = basicLightbox.create(
//     `<img src="${url}" width="800" height="600">`,
//     options
//   );
//   // вешаем слушателей на клик и на esc при октрытии модалки
//   instance.show();
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
