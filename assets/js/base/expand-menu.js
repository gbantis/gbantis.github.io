$('#nav-header .more').on('click', function (e) {

    var hiddenItems = $('#nav-header .hide-item');
    $(this).css("visibility", "hidden");

    hiddenItems.each(function (i, element) {
        var el = $(element);

        setTimeout(function () {
            el.css("display", "flex");
        }, 70 * i);
    });

    e.preventDefault();
});