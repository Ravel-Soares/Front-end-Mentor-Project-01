const btnMobile = document.querySelector('.btn-mobile');


function toggleMenu(){
  const nav = document.querySelector('nav');

  nav.classList.toggle('active'); // 'toggle' basicamente é adcione caso tenha, remova caso não tenha.

  if (nav.classList == 'active') {
    document.documentElement.style.overflow = 'hidden';
    document.body.scroll = "no"; 
  } else {
    document.documentElement.style.overflow = 'auto';
    document.body.scroll = "yes"; // IE
  }

}

btnMobile.addEventListener('click', toggleMenu)

