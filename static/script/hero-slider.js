document.addEventListener('DOMContentLoaded', function () {
  const hero = new HeroSlider('.swiper-container');
  hero.start();
});

class HeroSlider {
  constructor(el) {
      this.el = el;
      this.swiper = this._initSwiper();
  }

  _initSwiper() {
      return new Swiper(this.el, {
          // Optional parameters
          // direction: 'vertical',
          loop: true,
          grabCursor: true,
          // effect: 'fade',
          centeredSlides: true,
          slidesPerView: 1,
          speed: 500,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
      });
  }

  start(options = {}) {
      options = Object.assign({
          delay: 7000,
          disableOnInteraction: false
      }, options);
      
      this.swiper.params.autoplay = options;
      this.swiper.autoplay.start();
  }
  stop() {
      this.swiper.autoplay.stop();
  }
}
  