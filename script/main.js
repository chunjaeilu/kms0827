$(function () {
  $("header #gnb .depth1 > li").hover(
    function () {
      $(this).children(".depth2").addClass("show");
    },
    function () {
      $(this).children(".depth2").removeClass("show");
    }
  );
});
