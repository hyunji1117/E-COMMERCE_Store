//PROMOTION_SWIPER
new Swiper(".swiper", {
  spaceBetween: 30,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  autoplay: {
    delay: 4500
  },
});

//FOOTER
const toggleEl = document.querySelector('.footer_toggle_menu'); //class가 search인 요소를 찾아서 searchEl 변수에 할당하기
const searchToggleMenuEl = toggleEl.querySelector('toggle_menu--name'); //앞서 찾아둔 searchEl변수에서 input을 찾기

toggleEl.addEventListener('click', function () { //searchInputEl이 클릭되면 익명함수 로직이 실행된다. 
  searchToggleMenuEl.focus(); //실제로 foucus를 강제 적용하기.
});

searchToggleMenuEl.addEventListener('focus', function () { //만약에 searchInput에 foucus(마우스 클릭)가 되면 'focused'class가 추가되어 실행된다. = 핸들러
  toggleEl.classList.add('focused'); //class정보를 가지고 있는 객체에 어떤 class내용을 추가하겠다. 
  searchToggleMenuEl.setAttribute('toggle_menu--contents', ' ⃝ ⃝ ⃝ 주식회사'); //searchInputEl변수에 Attribute(html)을 지정한다. 
});

searchToggleMenuEl.addEventListener('blur', function () { //blur: focus가 해제 되었을 때를 의미한다.
  toggleEl.classList.remove('focused'); //searchInputEl에 focus가 해제되면 새로 추가한 class focused를 삭제한다.  
  searchToggleMenuEl.setAttribute('toggle_menu--contents', ' ');
});