$(function () {
  $("header #gnb .depth1 > li").hover(
    /* gnb 호버효과 */
    function () {
      // mouse over
      $(this).children(".depth2").addClass("show");
      // 전체 보이기
      // $("header #gnb .depth2").addClass("show");
    },
    function () {
      // mouse out
      $(this).children(".depth2").removeClass("show");
      // 전체 가리기
      // $("header #gnb .depth2").removeClass("show");
    }
  );

  /* 메인비주얼 슬라이드 효과 */
  let imgNum = 0;
  let imgHeight = 300;
  let intervalTime = 3000;

  setInterval(function () {
    imgNum++;
    if (imgNum >= 3) {
      imgNum = 0;
    }
    $("#main-visual .slide-box").css({
      transform: `translateY(${-(imgNum * imgHeight)}px)`,
    });
  }, intervalTime);
});
