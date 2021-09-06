// Smooth links scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Go top btn
var btn = $('.gotop');

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function (e) {
  e.preventDefault();
  $('html').animate({ scrollTop: 0 }, '300');
});

//Popup documents
let docLinks = document.querySelectorAll('.documents-link');
let bg = document.querySelector('.documents-wrapper');
let legalize = document.querySelector('#legalize-doc');
let privat = document.querySelector('#privat-doc');
let geodezic = document.querySelector('#geodezic-doc');
let kadastr = document.querySelector('#kadastr-doc');


for (let i = 0; i < docLinks.length; i++) {
  console.log(docLinks[i].dataset.id)
  docLinks[i].addEventListener('click', docLinkShow)
}
function docLinkShow(e) {

  if (e.target.dataset.id === 'legalize') {
    if (legalize.classList.contains('documents-needed-hide')) {
      bg.style.display = 'block';
      legalize.classList.remove('documents-needed-hide');
      legalize.classList.add('documents-needed-show');
      console.log('legalize')
    }
    else {
      legalize.classList.add('documents-needed-hide');
      legalize.classList.remove('documents-needed-show');
      bg.style.display = 'none';
      console.log('legalize-hide');
    }
  }
  if (e.target.dataset.id === 'privat') {
    if (privat.classList.contains('documents-needed-hide')) {
      bg.style.display = 'block';
      privat.classList.remove('documents-needed-hide');
      privat.classList.add('documents-needed-show');
      console.log('privat')
    }
    else {
      privat.classList.add('documents-needed-hide');
      privat.classList.remove('documents-needed-show');
      bg.style.display = 'none';
      console.log('privat-hide')
    }
  }
  if (e.target.dataset.id === 'geodezic') {
    if (geodezic.classList.contains('documents-needed-hide')) {
      bg.style.display = 'block';
      geodezic.classList.remove('documents-needed-hide');
      geodezic.classList.add('documents-needed-show');
      console.log('geodezic')
    }
    else {
      geodezic.classList.add('documents-needed-hide');
      geodezic.classList.remove('documents-needed-show');
      bg.style.display = 'none';
      console.log('geodezic-hide')
    }
  }
  if (e.target.dataset.id === 'kadastr') {
    if (kadastr.classList.contains('documents-needed-hide')) {
      bg.style.display = 'block';
      kadastr.classList.remove('documents-needed-hide');
      kadastr.classList.add('documents-needed-show');
      console.log('kadastr')
    }
    else {
      kadastr.classList.add('documents-needed-hide');
      kadastr.classList.remove('documents-needed-show');
      bg.style.display = 'none';
      console.log('kadastr-hide')
    }
  }
}
