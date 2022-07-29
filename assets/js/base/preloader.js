//Прелоадер-------------------------------------------------------------------------------------------------------------

// $(window).on('load', function () {
//     var $preloader = $('#page-preloader'),
//         $spinner = $preloader.find('.wrap');
//     $spinner.fadeOut(100);
//
//     $preloader.fadeOut(200);
//
//     $(document).trigger('loader-finish');
// });

document.addEventListener('DOMContentLoaded', function() {
    var preloader = document.getElementById('page-preloader');

    const event = document.createEvent('Event');
    event.initEvent('loader-finish', true, true);

    document.dispatchEvent(event);
    preloader.classList.add('hide');

    //Важно! Данный тригер нужен в некоторых файлах, например в модуле time-buy
});