$("#btn_more_filters").on('click', function() {
    console.log("clicked");
    $("#advanced_serach_home").toggleClass('d-none');
    $(this).toggleClass("btn_filled_dark btn_outline_light");
    $(this).find("img").toggleAttr('src', '../Assests/advanced_white.svg', '../Assests/advanced.svg');
  })