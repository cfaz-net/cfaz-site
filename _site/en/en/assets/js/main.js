(function() {
  "use strict";
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  // Botão de voltar ao topo
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

  // Preloader
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  // Slide sobre(valores)
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

  // Slider Parceiros
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

  // Ano atual
  window.addEventListener('load', ()=> {
    let current_year = document.getElementById('current_year')

    if(!current_year){return}

    const date = new Date();
    current_year.innerHTML = date.getFullYear();
  });

  // Tradução pelo browser
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

// Card de parceiros (quando passa o mouse, mostra o segmento)
function showSegment(num) {
  const imageSelector = `.segment-image-${num}`;
  const textSelector = `.segment-text-${num}`;

  const imageElement = document.querySelector(imageSelector);
  const textElement = document.querySelector(textSelector);

  const isImageHidden = imageElement.classList.contains('d-none');

  if (!isImageHidden) {
    imageElement.classList.add('d-none');
    textElement.classList.remove('d-none');
  } else {
    imageElement.classList.remove('d-none');
    textElement.classList.add('d-none');
  }
}

// Botão de voltar ao topo do site
function toggleBacktotop(){
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