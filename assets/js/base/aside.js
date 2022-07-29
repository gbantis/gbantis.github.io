$(document).ready(function () {

    $('#footer .accordion a').on('click', function (e)
    {
        $('#footer .accordion p').slideToggle();
        e.preventDefault();
    });

    $('#sidebar .more').on('click', function (e) {

        var hiddenItems = $('#sidebar .hide-item');
        $(this).hide();

        hiddenItems.each(function (i, element) {
            var el = $(element);

            setTimeout(function () {
                el.show().addClass("animated fadeInLeft");
            }, 70 * i);
        });

        e.preventDefault();
    });


    $('#dismiss, .dfx-overlay').on('click', function () {

        $('#sidebar').removeClass('active');
        $('.dfx-overlay').removeClass('active');

        $('#sidebarCollapse').find('span').text('меню');
        $('#sidebarCollapse').removeClass('is-active');

        //Очень сложное дейтвие
        // $('#dfx-content-wrapper').removeClass('blur');
    });

    $('#sidebarCollapse').on('click', function () {

        if ($(this).hasClass('is-active'))
        {
            //Если меню открыто, то при повторном нажатии закрываем

            $('#sidebar').removeClass('active');
            $('.dfx-overlay').removeClass('active');

            // $(this).find('span').text('меню');
            $(this).removeClass('is-active');
        }
        else
        {
            $('#sidebar').addClass('active');
            $('.dfx-overlay').addClass('active');

            //Очень сложное дейтвие
            // $('#dfx-content-wrapper').addClass('blur');

            $('.collapse.in').toggleClass('in');
            $('a[aria-expanded=true]').attr('aria-expanded', 'false');

            // $(this).find('span').text('закрыть');
            $(this).addClass('is-active');
        }
    });

});