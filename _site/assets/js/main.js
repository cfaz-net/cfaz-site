(function() {
  "use strict";
  /* Easy selector helper function */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /* Easy on scroll event listener */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /* Botão de voltar ao topo */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /* Preloader */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /* Slide sobre - valores */
  let values_slider = select('.values-slider');
  if (values_slider) {
    new Swiper('.values-slider', {
      speed: 600,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      }
    });
  }

  /* Slider Parceiros */
  let partners = select('.partners');
  if (partners) {
    new Swiper(".partners", {
      slidesPerView: 2,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 6,
        },
        1024: {
          slidesPerView: 8,
        },
      },
    });
  }

  /* Ano atual */
  window.addEventListener('load', ()=> {
    let current_year = document.getElementById('current_year')

    if(!current_year){return}

    const date = new Date();
    current_year.innerHTML = date.getFullYear();
  });

  /**
   * Google Analytics
   */
  // window.addEventListener('load', () => {
  //   window.dataLayer = window.dataLayer || [];
  //   function gtag(){dataLayer.push(arguments);}
  //   gtag('js', new Date());

  //   gtag('config', 'G-9G5F134FT9');
  // });

  /**
   * Google ads
   */
  // window.addEventListener('load', () => {
  //   window.dataLayer = window.dataLayer || [];
  //   function gtag(){dataLayer.push(arguments);}
  //   gtag('js', new Date());

  //   gtag('config', 'AW-754517111');
  // });

  /**
   * Hotjar
   */
  // (function(h,o,t,j,a,r){
  //   h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
  //   h._hjSettings={hjid:2448222,hjsv:6};
  //   a=o.getElementsByTagName('head')[0];
  //   r=o.createElement('script');r.async=1;
  //   r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
  //   a.appendChild(r);
  // })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');

  /**
   * Pixell Facebook
   */
  // !function(f,b,e,v,n,t,s){
  //   if(f.fbq)return;n=f.fbq=function(){
  //     n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)
  //   };
  //   if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  //     n.queue=[];t=b.createElement(e);t.async=!0;
  //     t.src=v;s=b.getElementsByTagName(e)[0];
  //     s.parentNode.insertBefore(t,s)}(window, document,'script',
  //     'https://connect.facebook.net/en_US/fbevents.js');
  //     fbq('init', '981313072668923');
  //     fbq('track', 'PageView');

  /* Tradução pelo browser */
  var hostname = window.location.hostname;
  var referrer = document.referrer;
  var landingPage = !referrer || referrer.indexOf(hostname) == -1;

  var lang = navigator.language || navigator.userLanguage;
    
  if (lang.indexOf('es') == 0 && landingPage){
    window.location = '/es/';
  }else if(lang.indexOf('en') == 0 && landingPage){
    window.location = '/en/';
  }
})()

/* Card de parceiros (quando passa o mouse, mostra o segmento) */
function showSegment(num){
  check_class_none = document.querySelector(".segment-image-" + num).classList.contains("d-none")
  if(!check_class_none){
    document.querySelector(".segment-image-" + num).classList.add('d-none')
    document.querySelector(".segment-text-" + num).classList.remove('d-none')
  } else {
    document.querySelector(".segment-image-" + num).classList.remove('d-none')
    document.querySelector(".segment-text-" + num).classList.add('d-none')
  }
}