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
// console.log(imagesPreviewMarkup);

// console.log(window.addEventListener('keydown', onImageContainerClick));

function onImageContainerClick(e) {
  e.preventDefault();
  const isImageEl = e.target.classList.contains('gallery__image');

  if (!isImageEl) {
    return;
  }
  console.log('sgadaers');
  console.log('Escape');
  console.log(e.key === 'Escape');
  instance.show();
  const instance = basicLightbox.create(
    `
    <div class="modal">
        <p>A custom modal that has been styled independently. 
It's not part of basicLightbox, 
but perfectly shows its flexibility.</p >
        <input placeholder="Type something">
        <a>Close</a>
    </div>
`,
    {
      onShow: (instance) => {
        instance.element().querySelector('a').onclick = instance.close;
      },
    }
  );
  //   const instance = basicLightbox.create(`
  //     <div class="modal">
  //         <p>
  //             Your first lightbox with just a few lines of code.
  //             Yes, it's really that simple.
  //         </p>
  //     </div>
  // `);
  //   instance.show(() => console.log('lightbox now visible'));
  //   //   instance.close(() => console.log('lightbox not visible anymore'));
  //   //   instance.show();
  //   console.log(instance.show());
}

// instance.show();

// основа 2
// let instance = 'onImageContainerClick';
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
