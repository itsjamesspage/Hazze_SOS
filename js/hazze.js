(function ($) {
    $('.count').each(function () {
        $(this).prop('Counter', 00).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: "swing",
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

    // Gallery Filter 
    $('.gallery-controls li').on('click', function () {
        $('.gallery-controls li').removeClass('active');
        $(this).addClass('active');
    });
    if ($('.gallery-filter').length > 0) {
        let containerEl = document.querySelector('.gallery-filter');
        let mixer = mixitup (containerEl);
    }
    // Gallery Filter 

})(jQuery);



