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
// Phone gyro rotate

let counter = 0;
const updateRate = 10;
const limit = 45;
const tiltable = document.getElementById("logo");

function updateNow() {
    return counter++ % updateRate === 0;
};

window.addEventListener("deviceorientation", function(event) {
  if (updateNow()) {
    let position = Math.round(event.gamma);
    if (Math.abs(position) > limit) {
       if (position > limit) {
            position = limit;
        } else {
            position = -limit;
                }
        }
    position = position / -100;
    let style = "rotateY(" + position + "deg)";
    tiltable.style.transform = style;
    }
});