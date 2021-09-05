setTimeout(() => {
  let element=document.querySelector('.preloader');
  element.parentNode.removeChild(element);
}, 2000)
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