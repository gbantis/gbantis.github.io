if ($(window).width() <= 992)
{
    $('#fixed-header').addClass('fixed');
}
else
{
    $(window).scroll(function () {

        if ($(window).scrollTop() >= 300) {
            $('#fixed-header').addClass('fixed');
        }
        else {
            $('#fixed-header').removeClass('fixed');
        }
    });
}

// $(document).on('beforeShow.fb', function (e, instance, slide) {
//     $('#fixed-header').removeClass('fixed');
// });
//
// $(document).on('afterClose.fb', function (e, instance, slide) {
//     if ($(window).width() <= 992)
//     {
//         $('#fixed-header').addClass('fixed');
//     }
//     else
//     {
//         if ($(window).scrollTop() >= 300) {
//             $('#fixed-header').addClass('fixed');
//         }
//     }
// });

