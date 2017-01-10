$(function() {
  $("#javascript").click(function () {
    $("#javascript").hide();
    $(".java").slideToggle();
  });

  $(".java").click(function () {
    $(".java").hide();
    $("#javascript").fadeIn();
  })

  $("#operators").click(function () {
    $(".operators").slideToggle();
  });

  $("#variables").click(function () {
    $(".variables").slideToggle();
  });

  $("#methods").click(function () {
    $(".methods").slideToggle();
  });

  $("#arguments").click(function () {
    $(".arguments").slideToggle();
  });

  $("#parameters").click(function () {
    $(".parameters").slideToggle();
  });

  $("#booleans").click(function () {
    $(".booleans").slideToggle();
  });

  $("#functions").click(function () {
    $(".functions").slideToggle();
  });

  $("#undefined").click(function () {
    $(".undefined").slideToggle();
  });

  $("#strings").click(function () {
    $(".strings").slideToggle();
  });

  $("#nan").click(function () {
    $(".nan").slideToggle();
  });

  $("#jquery").click(function () {
    $(".jquery").slideToggle();
  });
});
