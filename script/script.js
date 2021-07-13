function inViewport(element) {
    var bb = element.getBoundingClientRect();  // Get the elements position relative to the viewport
    // Check if the element is outside the viewport
    // Then invert the returned value because you want to know the opposite
    return !(bb.top > innerHeight || bb.bottom < 0);
}
var myElement = document.querySelector('.steps'),
    gotopBtn=document.querySelector('.gotop')
// Listen for the scroll event 
document.addEventListener('scroll', event => {
    // Check the viewport status 
    if (inViewport(myElement)) {
        gotopBtn.style.opacity = '0';
        gotopBtn.style.right = '-60px';
    } else {
        gotopBtn.style.opacity = '1';
        gotopBtn.style.right = '20px';
    }
})