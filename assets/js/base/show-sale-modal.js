$(document).ready(function () {

    var saleModal = $('.sale-modal[data-sale-autoshow="1"]');
    var unviewedSalesNotificationModal = $('#unviewed-sales-notification');

    if (saleModal.length > 0)
    {
        setTimeout(function () {
            $.fancybox.open({
                src: '.sale-modal',
                type: 'inline',
                touch: false
            });
        }, 3500);
    }

    // Вывод уведомления о непросмотренных акциях
    if (unviewedSalesNotificationModal.length > 0)
    {
        setTimeout(function () {
            $.fancybox.open({
                src: '#unviewed-sales-notification',
                type: 'inline',
            });
        }, 500);
    }


    // Сделать все акции просмотренными (при клике на кнопку в всплывающем окне)
    $('#makeSalesViewed').on('click', function (e) {
        let ajaxUrl = $(this).data('url');

        $.ajax({
            type: "POST",
            url: ajaxUrl,
            data: {},
            success: function (response) {
                if (!response) {
                    console.log('Неверный ответ сервера');
                }
                else {
                    console.log('Акции успешно просмотренны');
                }
            },
            error: function (response) {
                console.log('Ошибка сервера');
            }
        });

        $.fancybox.close();

        e.preventDefault();
    });

});
