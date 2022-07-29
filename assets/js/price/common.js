$('.subs-wrapper').owlCarousel({
    margin: 15,
    items: 4,
    loop: false,
    responsive: {
        0: {
            items: 1,
            stagePadding: 30,
            startPosition: 2
        },
        480: {
            startPosition: 0,
            items: 1,
        },
        768:
            {
                items: 2,
            },
        992:
            {
                items: 2,
            },
        1200:
            {
                items: 4
            }
    }
});

//Сразу показывать бесплатную подписку, в случае если она активна
let freeSubActive = parseInt($('input[name="freeSubActive"]').val());

if (freeSubActive === 1)
{
    let freeSubId = $('input[name="freeSubId"]').val();

    $('.subs-wrapper').trigger('to.owl.carousel', freeSubId - 1);

    document.querySelector('.subs-wrapper').scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
}


//Переключение на нужную подписку при клике на кнопку
$('.show-sub').on('click', function(){
    let subId = $(this).data('sub-id');
    $('.subs-wrapper').trigger('to.owl.carousel', subId - 1);

    document.querySelector('.subs-wrapper').scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
});