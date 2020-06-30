
$('.carousel_selector').each((ix, el) => {
    $(el).attr("id", 'carouselControl_' + ix);
    $(el).find(".custom_carousel_button").attr("href", '#carouselControl_' + ix);
});