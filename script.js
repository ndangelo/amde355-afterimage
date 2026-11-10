// 1: Mobile menu
const menu=document.querySelector('#menu'),nav=document.querySelector('#nav');menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
// 2: Gallery lightbox. The native dialog handles Escape.
const dialog=document.querySelector('#lightbox');if(dialog){document.querySelectorAll('.work').forEach(work=>work.addEventListener('click',()=>{dialog.querySelector('img').src=work.dataset.img;dialog.querySelector('img').alt=work.querySelector('img').alt;dialog.querySelector('p').textContent=work.dataset.title;dialog.showModal();}));document.querySelector('#close').addEventListener('click',()=>dialog.close());}
// 3: Form demonstration, no data transmitted
const form=document.querySelector('#signup');if(form)form.addEventListener('submit',event=>{event.preventDefault();document.querySelector('#status').textContent='Demonstration only: no information was sent.';});