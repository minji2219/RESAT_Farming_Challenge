const bigEl = document.querySelector('.big')
const triggerEl = document.querySelector('.menu_trigger')

window.addEventListener('resize',()=>{
  if(window.innerWidth <600){
    bigEl.classList.remove('big')
    bigEl.classList.add('small')
  }else{
    bigEl.classList.remove('small')
    bigEl.classList.add('big')
  }
})
triggerEl.addEventListener('click',()=>{
  bigEl.classList.toggle('show')
})