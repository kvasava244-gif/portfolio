// highlight active section link on scroll
  const links = document.querySelectorAll('.side-nav a');
  const sections = Array.from(links).map(l => document.querySelector(l.getAttribute('href')));
  function onScroll(){
    let idx = 0;
    sections.forEach((s,i) => { if(s && s.getBoundingClientRect().top < 140) idx = i; });
    links.forEach((l,i) => l.classList.toggle('active', i===idx));
  }
  document.addEventListener('scroll', onScroll, {passive:true});
  onScroll();

  // thesis figure carousel
  document.querySelectorAll('[data-carousel]').forEach(function(car){
    const slides = Array.from(car.querySelectorAll('.carousel-slide'));
    const dotsWrap = car.querySelector('.carousel-dots');
    let i = 0;
    slides.forEach((_, idx) => {
      const d = document.createElement('button');
      d.type = 'button';
      d.setAttribute('aria-label', 'Go to figure ' + (idx+1));
      if(idx===0) d.classList.add('is-active');
      d.addEventListener('click', () => show(idx));
      dotsWrap.appendChild(d);
    });
    const dots = Array.from(dotsWrap.children);
    function show(n){
      slides[i].classList.remove('is-active');
      dots[i].classList.remove('is-active');
      i = (n + slides.length) % slides.length;
      slides[i].classList.add('is-active');
      dots[i].classList.add('is-active');
    }
    car.querySelector('.prev').addEventListener('click', () => show(i-1));
    car.querySelector('.next').addEventListener('click', () => show(i+1));
  });