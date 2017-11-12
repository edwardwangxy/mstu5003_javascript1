$(".row").hover(
  function() {
    $(this).velocity({ scale: 1.05, boxShadowBlur: 15 });
  },
  function() {
    $(this).velocity({ scale: 1, boxShadowBlur: 0 });
  }
);
$('a[href*="#"]').on({
  click: function() {
    var targetid = $(this).attr("linkid");
    $(targetid).velocity("scroll", {
      duration: 500,
      offset: -200,
      easing: "ease-in-out"
    });
  }
});

$(window).scroll(function(event) {
  var st = $(this).scrollTop();
  if ((st > 170) & (st < 270)) {
    $("li").removeClass("active");
    $(".navbar-nav li:nth-child(2)").addClass("active");
  } else if (st >= 270) {
    $("li").removeClass("active");
    $(".navbar-nav li:nth-child(3)").addClass("active");
  } else {
    $("li").removeClass("active");
    $(".navbar-nav li:nth-child(1)").addClass("active");
  }
});
