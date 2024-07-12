const swiperWrapper = document.querySelector('.swiper-wrapper');

// Assuming 'gallery' is your array of image objects
gallery.forEach(item => {
  const swiperSlide = document.createElement('div');
  swiperSlide.classList.add('swiper-slide');

  const img = document.createElement('img');
  img.src = item.image;
  img.alt = 'Fotogalareya rasmi';
  img.classList='w-full'; // Ensure the image takes full width
  img.classList = "h-400px"

  swiperSlide.appendChild(img);
  swiperWrapper.appendChild(swiperSlide);
});

// Swiper.js configuration
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
});
