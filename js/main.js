 $(".star").rateYo({
   starWidth: "14px",
   readOnly: true,
   ratedFill: "#FFA858",
   normalFill: "#c4c4c4",
   spacing: '3px',
   starSvg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns: xlink = "http://www.w3.org/1999/xlink" width = "18pt" height = "16pt" viewBox = "0 0 18 16" version = "1.1" > < g id = "surface1" > <path d = "M 8.101562 0.554688 L 6.0625 4.695312 L 1.496094 5.359375 C 0.679688 5.476562 0.351562 6.488281 0.945312 7.066406 L 4.246094 10.285156 L 3.464844 14.832031 C 3.324219 15.652344 4.191406 16.269531 4.914062 15.882812 L 9 13.738281 L 13.085938 15.882812 C 13.808594 16.265625 14.675781 15.652344 14.535156 14.832031 L 13.753906 10.285156 L 17.054688 7.066406 C 17.648438 6.488281 17.320312 5.476562 16.503906 5.359375 L 11.9375 4.695312 L 9.898438 0.554688 C 9.53125 -0.179688 8.472656 -0.191406 8.101562 0.554688 Z M 8.101562 0.554688 "/></g></svg>',
 });

 $(".review-star").rateYo({
   starWidth: "22px",
   readOnly: true,
   ratedFill: "#FFA858",
   normalFill: "#c4c4c4",
   spacing: '3px',
   starSvg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns: xlink = "http://www.w3.org/1999/xlink" width = "18pt" height = "16pt" viewBox = "0 0 18 16" version = "1.1" > < g id = "surface1" > <path d = "M 8.101562 0.554688 L 6.0625 4.695312 L 1.496094 5.359375 C 0.679688 5.476562 0.351562 6.488281 0.945312 7.066406 L 4.246094 10.285156 L 3.464844 14.832031 C 3.324219 15.652344 4.191406 16.269531 4.914062 15.882812 L 9 13.738281 L 13.085938 15.882812 C 13.808594 16.265625 14.675781 15.652344 14.535156 14.832031 L 13.753906 10.285156 L 17.054688 7.066406 C 17.648438 6.488281 17.320312 5.476562 16.503906 5.359375 L 11.9375 4.695312 L 9.898438 0.554688 C 9.53125 -0.179688 8.472656 -0.191406 8.101562 0.554688 Z M 8.101562 0.554688 "/></g></svg>',
 });

 $('.header__menu-btn, .header__top-nav, .header__top-link, .header__top-item').on('click', function () {
   $('.header__menu-btn').toggleClass('header__menu-btn--active');
   $('.header__top-nav').toggleClass('header__top-nav--active');
   $('body').toggleClass('lock-scroll');
 });


 $(" .header__top-link, .header__top-logo").on("click", function (e) {
   e.preventDefault();
   var id = $(this).attr('href'),
     top = $(id).offset().top;
   $('body,html').animate({
     scrollTop: top
   }, 1500);
 });



