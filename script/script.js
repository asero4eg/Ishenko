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
function docHide() {
  for (let i = 0; i < modalWindows.length; i++) {
    bg.style.display = 'none';
    removeBlur()
    document.querySelector('body').style.overflowY = 'auto';
    modalWindows[i].classList.remove('documents-needed-show');
    modalWindows[i].classList.add('documents-needed-hide');
  }
}
function addBlur() {
  let blocks = ['workflow', 'services', 'why-us', 'about-us', 'faq', 'form-section', 'footer']
  for (let i of blocks) {
    let element = document.querySelector(`#${i}`);
    element.style.filter = 'blur(3px)';
  }
}
function removeBlur() {
  let blocks = ['workflow', 'services', 'why-us', 'about-us', 'faq', 'form-section', 'footer']
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

//Interactive gradient
document.querySelector('.header-title').onmousemove = function clickEvent(e) {
  // e = Mouse click event.
  var rect = e.target.getBoundingClientRect();
  var x = e.clientX - rect.left; //x position within the element.
  var y = e.clientY - rect.top;  //y position within the element.
  e.target.style.backgroundPositionX = `${x}px`
  e.target.style.backgroundPositionY = `${y}px`
}