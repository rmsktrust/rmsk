const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
if (menuToggle && nav) menuToggle.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a => a.addEventListener('click', () => nav && nav.classList.remove('open')));
document.querySelectorAll('#year').forEach(el => el.textContent = new Date().getFullYear());
const backTop=document.querySelector('.back-top');
if(backTop){window.addEventListener('scroll',()=>backTop.classList.toggle('show',window.scrollY>500));backTop.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));}
const revealItems=document.querySelectorAll('.section,.activity-home,.support-grid article,.journey-grid>div');
const observer='IntersectionObserver' in window?new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('revealed');observer.unobserve(e.target)}}),{threshold:.08}):null;
if(observer) revealItems.forEach(el=>{el.classList.add('reveal');observer.observe(el)});
