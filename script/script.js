// Smooth links scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
//Header navigation accordeon

$(function () {
  $(".mobile-nav").accordion({
    collapsible: true,
    active: false
  });
});

// Go top btn
let btn = $('.gotop');

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

// Modal documents
let docLinks = document.querySelectorAll('.documents-link');

let bg = document.querySelector('#modal-bg'),
  legalize = document.querySelector('#legalize-doc'),
  privat = document.querySelector('#privat-doc'),
  geodezic = document.querySelector('#geodezic-doc'),
  kadastr = document.querySelector('#kadastr-doc');
let modalWindows = document.querySelectorAll('.documents-needed');


for (let i = 0; i < docLinks.length; i++) {
  console.log(docLinks[i].dataset.id)
  docLinks[i].addEventListener('click', docShow)
}
bg.addEventListener('click', docHide)

function docShow(e) {
  if (e.target.dataset.id === 'legalize' && legalize.classList.contains('documents-needed-hide')) {
    bg.style.display = 'block';
    addBlur();
    document.querySelector('body').style.overflowY = 'hidden';
    legalize.classList.remove('documents-needed-hide');
    legalize.classList.add('documents-needed-show');
    console.log('legalize')
  }
  if (e.target.dataset.id === 'privat' && privat.classList.contains('documents-needed-hide')) {
    bg.style.display = 'block';
    addBlur();
    document.querySelector('body').style.overflowY = 'hidden';
    privat.classList.remove('documents-needed-hide');
    privat.classList.add('documents-needed-show');
    console.log('privat')
  }
  if (e.target.dataset.id === 'geodezic' && geodezic.classList.contains('documents-needed-hide')) {
    bg.style.display = 'block';
    addBlur();
    document.querySelector('body').style.overflowY = 'hidden';
    geodezic.classList.remove('documents-needed-hide');
    geodezic.classList.add('documents-needed-show');
    console.log('geodezic')
  }
  if (e.target.dataset.id === 'kadastr' && kadastr.classList.contains('documents-needed-hide')) {
    bg.style.display = 'block';
    addBlur();
    document.querySelector('body').style.overflowY = 'hidden';
    kadastr.classList.remove('documents-needed-hide');
    kadastr.classList.add('documents-needed-show');
    console.log('kadastr')
  }
}

// Hide modal document
function docHide() {
  for (let i = 0; i < modalWindows.length; i++) {
    bg.style.display = 'none';
    removeBlur()
    document.querySelector('body').style.overflowY = 'auto';
    modalWindows[i].classList.remove('documents-needed-show');
    modalWindows[i].classList.add('documents-needed-hide');
  }
}

// Add blur
const blocks = ['workflow', 'services', 'why-us', 'about-us', 'faq', 'form-section', 'footer'];
function addBlur() {
  for (let i of blocks) {
    let element = document.querySelector(`#${i}`);
    element.style.filter = 'blur(3px)';
  }
}

// Remove blur
function removeBlur() {
  for (let i of blocks) {
    let element = document.querySelector(`#${i}`);
    element.style.filter = 'blur(0)';
  }
}

//Documents popup accordeon
$(function () {
  // hide all content
  let popups = ['legalize', 'privat', 'geodezic', 'kadastr']
  for (let i of popups) {
    let element = $(`#${i}-doc`);
    element.find('.accordeon-content').slice(1).hide();
    element.find('.accordeon-title').click(function () {
      $(this).parent().toggleClass('active').siblings().removeClass('active');
      element.find('.accordeon-content').slideUp();

      if (!$(this).next().is(":visible")) {
        $(this).next().slideDown();
      }
    });
  }
});

//Faq accordeon
$(document).ready(function () {
  $('.faq-title').click(function (e) {
    if ($('.faq').hasClass('one')) {
      $('.faq-title').not($(this)).removeClass('active');
      $('.faq-text').not($(this).next()).slideUp(300)
    }
    $(this).toggleClass('active').next().slideToggle(300)
  })
  $('.faq-text').click(function (e) {
    if ($('.faq').hasClass('one')) {
      $('.faq-title').not($(this)).removeClass('active');
      $('.faq-text').not($(this).next()).slideUp(300)
    }
    $(this).toggleClass('active').next().slideToggle(300)
  })
})
// Footer tooltip
tippy('.footer-copyright', {
  content: 'Markup by @asero4eg | Design by @RoadToCppDev',
  followCursor: true,
  maxWidth: 450,
});

//Logo interactive

let x;
let logo = $(".l-img");

logo.on("mousemove touchmove", function (e) {
  // normalise touch/mouse
  let pos = [e.offsetX, e.offsetY];
  e.preventDefault();
  let $card = $(this);
  // math for mouse position
  var l = pos[0];
  var t = pos[1];
  var h = $card.height();
  var w = $card.width();
  var px = Math.abs(Math.floor(100 / w * l) - 100);
  var py = Math.abs(Math.floor(100 / h * t) - 100);
  var lp = (50 + (px - 50) / 1.5);
  var tp = (50 + (py - 50) / 1.5);
  var ty = ((tp - 50) / 2) * -1;
  var tx = ((lp - 50) / 1.5) * .5;
  let tf = `transform: rotateX(${ty * 2}deg) rotateY(${tx * 2}deg)`
  e.target.style = tf;

})
logo.on('mouseout', function (e) {
  e.preventDefault();
  document.querySelector('.l-img').style.transform = `rotateX(0) rotateY(0)`
})