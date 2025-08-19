

const typed = new Typed('.typing', {
    strings: ['STACK DEVELOPER'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
    showCursor: true,
    cursorChar: '|'
});


window.onload = function(){
ScrollReveal({
    reset: true,
    distance: '50px',
    duration: 2000,
    delay: 200
});



ScrollReveal().reveal('.home,.about h1,', {origin:'top'})
ScrollReveal().reveal('.home h1,.about p,.more-info,.education h1,.footer-te,.down',{origin:'left'})
ScrollReveal().reveal('.home p,.media',{origin:'right'})
ScrollReveal().reveal('.home p,.college,.school-12,.school-10,.contact,.foot,.footer-ic',{origin:'bottom'})
}
