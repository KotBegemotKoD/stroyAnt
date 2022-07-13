//burger
$(document).ready(function () {
   $('.header__burger').click(function (event) {
      $('.header__burger,.header__menu').toggleClass('active');
      $('body').toggleClass('lock');
   });
});
//смена картинки
var images = ['../stroyAnt/source/cover/01.jpg',
   '../stroyAnt/source/cover/03.jpg'
],
   length = images.length,
   index = 1;
setInterval(function () {
   if (index == length) index = 0;
   document.getElementById('image_id').src = images[index++];
}, 5000);
// анимация ,появление блока
const animItems = document.querySelectorAll('._anim-items');
if (animItems.length > 0) {
   window.addEventListener('scroll', animOnScroll);
   function animOnScroll() {
      for (let index = 0; index < animItems.length; index++) {
         const animItem = animItems[index];
         const animItemHeight = animItem.offsetHeight;
         const animItemOffset = offset(animItem).top;
         const animStart = 6;

         let animItemPoint = window.innerHeight - animItemHeight / animStart;
         if (animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;

         }
         if ((window.scrollY > animItemOffset - animItemPoint) && window.scrollY < (animItemOffset + animItemHeight)) {
            animItem.classList.add(`_active`)

         } else {
            animItem.classList.remove('_active')

         }
      }
   }
}
function offset(el) {
   const rect = el.getBoundingClientRect(),
      scrollLeft = window.scrollY || document.documentElement.scrollLeft,
      scrollTop = window.scrollY || document.documentElement.scrollTop;
   return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}
setTimeout(() => {
   animOnScroll();
}, 300);
// изменение фона меню
window.onscroll = function () {
   var scrolled = window.pageYOffset || document.documentElement.scrollTop;
   document.getElementById('body-header').style.backgroundColor = scrolled == 0 ? "transparent" : "#25274D";
   document.getElementById('submenu-list').style.backgroundColor = scrolled == 0 ? "transparent" : "#25274D";
}
//плавный скролл
SmoothScroll({
   // Время скролла 400 = 0.4 секунды
   animationTime: 800,
   // Размер шага в пикселях
   stepSize: 65,
   // Дополнительные настройки:
   // Ускорение
   accelerationDelta: 30,
   // Максимальное ускорение
   accelerationMax: 2,
   // Поддержка клавиатуры
   keyboardSupport: true,
   // Шаг скролла стрелками на клавиатуре в пикселях
   arrowScroll: 50,
   // Pulse (less tweakable)
   // ratio of "tail" to "acceleration"
   pulseAlgorithm: true,
   pulseScale: 4,
   pulseNormalize: 1,
   // Поддержка тачпада
   touchpadSupport: true,
})
//выпад список
let isMobile = {
   Android: function () { return navigator.userAgent.match(/Android/i); },
   BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
   iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
   Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
   Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
   any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
};
let body = document.querySelector('body');
if (isMobile.any()) {
   body.classList.add('touch');
   let arrow = document.querySelectorAll('.arrow');
   for (i = 0; i < arrow.length; i++) {
      let thisLink = arrow[i].previousElementSibling;
      let subMenu = arrow[i].nextElementSibling;
      let thisArrow = arrow[i];

      thisLink.classList.add('parent');
      arrow[i].addEventListener('click', function () {
         subMenu.classList.toggle('open');
         thisArrow.classList.toggle('arrActive');
      });
   }
} else {
   body.classList.add('mouse');
}

// ____________________скрытие-появление блоков

const button = document.querySelector('.calc__buttons')
const calcList = document.querySelectorAll('.calc__list')
const calc__itemButtons = document.querySelectorAll('.calc_list__item_title')
const listItem = document.querySelectorAll('.calc_list__item>div')
button.addEventListener('click', (event) => {
   const targ = event.target;
   const elem = event.target.id

   calcList.forEach(
      (el) => {
         if ($('.calc__list').hasClass('cont_active')) {
            el.classList.remove('cont_active')
         }
         if (el.id == elem) {
            el.classList.toggle('cont_active')

         }
      }
   )
})
// calc__itemButtons.addEventListener('click', (event) => {
//    const table = event.target;
//    console.log(listItem)
//    listItem.classList.toggle('cont_active')
// })

for (btn of calc__itemButtons) {
   btn.addEventListener('click', (event) => {
      const targ = event.target;
      const table = targ.nextElementSibling;
      table.classList.toggle('cont_active')
      const mass = Array.from(listItem).forEach(el => {
         if (!$(el).hasClass(('cont_active'))) {
            el.classList.remove('cont_active')
         }
      })
   })
}

const inpCalc = document.querySelectorAll('.price_calc__table_row:nth-child(4)>input')
for (cin of inpCalc) {
   cin.addEventListener('input', (event) => {
      let inp = event.target
      console.log(inp)
      const res = cin.nextElementSibling
      res.innerHTML = inp.value
      console.log(res)
   }
   )
}
