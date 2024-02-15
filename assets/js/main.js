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

  // Tradução imagem Fluxo de Getsão Cfaz (vet)
  window.addEventListener('load', () => {
    let language = document.getElementById('language');
    if (document.getElementById('management-flow')){
      if (language.value == 'es'){
        let image_es = document.getElementById("image-es");
        image_es.classList.remove("disappear");
      } else if (language.value == 'en'){
        let image_en = document.getElementById("image-en");
        image_en.classList.remove("disappear");
      } else {
        let image = document.getElementById("image-pt");
        image.classList.remove("disappear");
      }
    }
  });

  // Analytics
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-3LS3VJQ318');

  // Mautic
  (function(w,d,t,u,n,a,m){
    w['MauticTrackingObject']=n;
    w[n]=w[n]||function(){(w[n].q=w[n].q||[]).push(arguments)},a=d.createElement(t),
    m=d.getElementsByTagName(t)[0];a.async=1;a.src=u;m.parentNode.insertBefore(a,m)
  })(window,document,'script','./assets/vendor/mautic/mautic.min.js','mt');
  mt('send', 'pageview');

  // Pixel Facebook
  !function(f,b,e,v,n,t,s){
    if(f.fbq)return;n=f.fbq=function(){
      n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)
    };
  
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '360036013643478');
      fbq('track', 'PageView');
})()

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

