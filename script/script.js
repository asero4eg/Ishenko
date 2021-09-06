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


for (let i = 0; i < docLinks.length; i++) {
  console.log(docLinks[i].dataset.id)
  docLinks[i].addEventListener('click', docLinkShow)
}
function docLinkShow(e) {

  if (e.target.dataset.id === 'legalize') {
    if (document.querySelector('#legalize-doc').classList.contains('documents-needed-hide')) {
      bg.style.display = 'block';
      document.querySelector('#legalize-doc').classList.remove('documents-needed-hide');
      document.querySelector('#legalize-doc').classList.add('documents-needed-show');
      console.log('legalize')
    }
    else {
      document.querySelector('#legalize-doc').classList.add('documents-needed-hide');
      document.querySelector('#legalize-doc').classList.remove('documents-needed-show');
      bg.style.display = 'none';
      console.log('legalize-hide');
      console.log(document.querySelector('#legalize-doc').classList)
    }
  }
  if (e.target.dataset.id === 'privat') {
    if (document.querySelector('#privat-doc').classList.contains('documents-needed-hide')) {
      bg.style.display = 'block';
      document.querySelector('#privat-doc').classList.remove('documents-needed-hide');
      document.querySelector('#privat-doc').classList.add('documents-needed-show');
      console.log('privat')
    }
    else {
      document.querySelector('#privat-doc').classList.add('documents-needed-hide');
      document.querySelector('#privat-doc').classList.remove('documents-needed-show');
      bg.style.display = 'none';
      console.log('privat-hide')
    }
  }
  if (e.target.dataset.id === 'geodezic') {
    if (document.querySelector('#geodezic-doc').classList.contains('documents-needed-hide')) {
      bg.style.display = 'block';
      document.querySelector('#geodezic-doc').classList.remove('documents-needed-hide');
      document.querySelector('#geodezic-doc').classList.add('documents-needed-show');
      console.log('geodezic')
    }
    else {
      document.querySelector('#geodezic-doc').classList.add('documents-needed-hide');
      document.querySelector('#geodezic-doc').classList.remove('documents-needed-show');
      bg.style.display = 'none';
      console.log('geodezic-hide')
    }
  }
  if (e.target.dataset.id === 'kadastr') {
    if (document.querySelector('#kadastr-doc').classList.contains('documents-needed-hide')) {
      bg.style.display = 'block';
      document.querySelector('#kadastr-doc').classList.remove('documents-needed-hide');
      document.querySelector('#kadastr-doc').classList.add('documents-needed-show');
      console.log('kadastr')
    }
    else {
      document.querySelector('#kadastr-doc').classList.add('documents-needed-hide');
      document.querySelector('#kadastr-doc').classList.remove('documents-needed-show');
      bg.style.display = 'none';
      console.log('kadastr-hide')
    }
  }
}
