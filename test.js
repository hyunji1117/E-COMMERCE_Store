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
// 슬라이드 영역 요소 검색!
const footerToggleEl = document.querySelector('.toggle_menu--contents');
// 슬라이드 영역를 토글하는 버튼 검색!
const footerToggleBtnEl = document.querySelector('.footer_toggle_menu');
// 슬라이드 영역 숨김 여부 기본값!
let isHidefooterToggle = true;
// 토글 버튼을 클릭하면,
footerToggleBtnEl.addEventListener('click', function () {
  // 슬라이드 영역 숨김 여부를 반댓값으로 할당!
  isHidefooterToggle = !isHidefooterToggle
  // 요소를 숨겨야 하면,
  if (isHidefooterToggle) {
    footerToggleEl.classList.add('hide');
  // 요소가 보여야 하면,
  } else {
    footerToggleEl.classList.remove('hide');
  }
});