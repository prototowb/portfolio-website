/* Menu */

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

//awaits click on hamburger menu toggle
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

//remove 'nav-open' class from element
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
   })
 })


 /* theme-toggle */

console.clear();

let duration = 0.4;
let isDay = true;

let back = document.getElementById('back');
let front = document.getElementById('front');

let switchTime = () => {
	
	back.setAttribute('href', '#' + (isDay ? 'day' : 'night'));
	front.setAttribute('href', '#' + (isDay ? 'night' : 'day'));
}
let scale = 30;
let toNightAnimation = gsap.timeline();

toNightAnimation
.to('#night-content', {duration: duration * 0.5, opacity: 1, ease: 'power2.inOut', x: 0})
.to('#circle', {
	duration: duration,
	ease: 'power4.in',
	scaleX: scale,
	scaleY: scale,
	x: 1,
	transformOrigin: '100% 50%',
}, 0)
.to('.day-label', {duration: duration * 2, ease: 'power2.inOut', opacity: 0.2}, 0)
.to('.night-label', {duration: duration * 2, ease: 'power2.inOut', opacity: 1}, 0)
.set('#circle', {
	// transformOrigin: '0% 50%',
	scaleX:-scale,
	// x: 8.5,
	onUpdate: () => switchTime()
}, duration).to('#circle', {
	duration: duration,
	ease: 'power4.out',
	scaleX: -1,
	scaleY: 1,
	x: 2,
}, duration)
.to('#day-content', {duration: duration * 0.5, opacity: 0.5}, duration * 1.5)
.to('body', {backgroundColor: '#13101c', color: '#f6f6f6', duration: duration * 2}, 0)
//.to('.hamburger', {backgroundColor: '#f6f6f6', duration: duration * 2}, 0)
.to(".nav-toggle", {"--clr-ham-toggl": "#f6f6f6"})
//.to(CSSRulePlugin.getRule('.hamburger::before'), {backgroundColor: '#f6f6f6', duration: duration * 2}, 0)
//.to(CSSRulePlugin.getRule('.hamburger::after'), {backgroundColor: '#f6f6f6', duration: duration * 2}, 0)
//.to([CSSRulePlugin.getRule('.hamburger::before'), CSSRulePlugin.getRule('.hamburger::after')], {backgroundColor: '#f6f6f6', duration: duration * 2}, 0) 


let stars = Array.from(document.getElementsByClassName('star'));
stars.map(star => gsap.to(star, {duration: 'random(0.4, 1.5)', repeat: -1, yoyo: true, opacity: 'random(0.2, 0.5)'}))
gsap.to('.clouds-big', {duration: 15, repeat: -1, x: -74, ease: 'linear'})
gsap.to('.clouds-medium', {duration: 20, repeat: -1, x: -65, ease: 'linear'})
gsap.to('.clouds-small', {duration: 25, repeat: -1, x: -71, ease: 'linear'})


let switchToggle = document.getElementById('input');
switchToggle.addEventListener('change', () => toggle())

//let the "checked" state be 'isDay'.
//When the dark-theme switch is set to 'isDay',
//play the 'toNightAnimation' in reverse.
//If unchecked, play the 'toNightAnimation'.
let toggle = () => 
{
	isDay = switchToggle.checked == true;
	if (isDay) {
    	toNightAnimation.reverse();
	} else {
    	toNightAnimation.play();
	}
}


toNightAnimation.reverse();
toNightAnimation.pause();