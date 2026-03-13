//  new Splide('.splide').mount();
const heroSlider=new Splide('.hero-splide', {
  type: 'loop',        // يكرر السلايد
  perPage: 1,          // عدد العناصر المعروضة
  perMove: 1,          // عدد التحرك
  gap: '20px',         // المسافة بين السلايدات
  autoplay: true,      // تشغيل تلقائي
  interval: 2000,      // مدة الانتظار
  pauseOnHover: true,  // يوقف عند مرور الماوس
  arrows: false,        // أزرار يمين يسار
  pagination: false,    // النقاط أسفل
}).mount();
const navBar=document.querySelector('nav')

document.addEventListener('scroll', ()=>{
if(scrollY>600) {
  navBar.classList.add('active')
}
else{
  navBar.classList.remove('active')
}
})
// const superSlider=new Splide('.slider', {
//   type: 'loop',        // يكرر السلايد
//   perPage: 4,          // عدد العناصر المعروضة
//   perMove: 1,          // عدد التحرك
//   gap: '20px',         // المسافة بين السلايدات
//   autoplay: false,      // تشغيل تلقائي
//   interval: 2000,      // مدة الانتظار
//   pauseOnHover: true,  // يوقف عند مرور الماوس
//   arrows: true,        // أزرار يمين يسار
//   pagination: false,    // النقاط أسفل
// }).mount();
const superSlider = new Splide('.slider', {
  type: 'loop',
  perPage: 4,
  perMove: 1,
  gap: '25px',
  arrows: false,
  pagination: false,
  autoplay: false,
  breakpoints: {
    1200: {
      perPage: 3,
    },
    768: {
      perPage: 2,
    },
    576: {
      perPage: 1,
    }
  }
}).mount();

document.querySelector('.arrows .prev' ).addEventListener('click', ()=>{
  superSlider.go('>')
})
document.querySelector('.arrows .next' ).addEventListener('click', ()=>{
  superSlider.go('<')
})