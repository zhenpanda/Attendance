$(function() {
  $(".rslides").responsiveSlides({
    auto: true,     // Boolean: Animate automatically, true or false
    speed: 600,     // Integer: Speed of the transition, in milliseconds
    timeout: 15000, // Integer: Time between slide transitions, in milliseconds
    pager: true    // Boolean: Show pager, true or false
  });
});