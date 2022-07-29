$(document).ready(function ()
{
    const language = document.documentElement.lang;

    function getRandomArray(arrayLength)
    {
        return Array.from({length: arrayLength}, () => getRandomInt(20, 90));
    }

    function getRandomInt(min, max)
    {
        return parseInt(Math.random() * (max - min) + min);
    }

    if( window.innerWidth >= 768 ){
        var ctx = document.getElementById("main-chart");

        var labelRu = [
            "Атака",
            "Контроль мяча",
            "Дриблинг",
            ["Атака", "с флангов"],
            "Скорость",
            "Пассы",
            ["Длинные", "передачи"],
            ["Физич.", "подготовка"],
            ["Борьба", "в воздухе"],
            "Защита",
            "Техничность",
            "Контр-атаки",
            ["Тренировочный", "лагерь"],
            "Прошлые игры",
            "Состав команды",
        ];

        var labelEn = [
            "Attack",
            "Ball control",
            "Dribbling",
            "Flank attack",
            "Speed",
            "Passes",
            "Long passes",
            "Physical training",
            "Fouls",
            "Defence",
            "Technicality",
            "Counter-attacks",
            "Training camp",
            "Last games",
            "Line-up",
        ];

        var marksData = {
            datasets: [{
                label: "Команда 1",
                borderColor: "rgba(0, 232, 237, 0.8)",
                pointBackgroundColor: "rgba(0, 232, 237, 1)",
                backgroundColor: "rgba(0, 232, 237, 0.2)",
                data: getRandomArray(15),
                fillStyle: "#01A4E0",
                lineTension: 0.2
            }, {
                label: "Команда 2",
                borderColor: "rgba(255, 217, 41, 0.9)",
                pointBackgroundColor: "rgba(255, 217, 41, 1)",
                backgroundColor: "rgba(255, 217, 41, 0.2)",
                data: getRandomArray(15),
                lineTension: 0.2
            }]
        };

        if (language === 'ru')
        {
            marksData.labels = labelRu;
        }
        else if (language === 'en')
        {
            marksData.labels = labelEn;
        }
        else
        {
            marksData.labels = labelRu;
        }

        var options = {
            responsive: true,
            maintainAspectRatio: false,
            legend: false,
            animation: {
                duration: 3500,
            },
            tooltips: {
                enabled: false
            },
            scale: {
                ticks: {
                    min: 0,
                    max: 100,
                    display: false,
                    stepSize: 25,
                },
                pointLabels: {
                    fontColor: "#bbb",
                    fontSize: 10,
                    // lineHeight: 2
                },
                gridLines: {
                    color: "rgba(255, 255, 255, 0.6)"
                },
                angleLines: {
                    color: "rgba(255, 255, 255, 0.15)"
                },
            },
        };
        var mainRadarChart = new Chart(ctx, {
            type: 'radar',
            data: marksData,
            options: options
        });

        
        if ($(window).width() > 768)
        {
            setInterval(function() {
                mainRadarChart.data.datasets.forEach(function(dataset) {
                    dataset.data = getRandomArray(15);
                });

                mainRadarChart.update();
            }, 2000);
        }
    }

    $('.advantage-slider').owlCarousel({
        autoplay: true,
        margin: 15,
        autoplaySpeed: 2000,
        autoplayTimeout: 6000,
        responsive: {
            0: {
                items: 1,
                stagePadding: 30,
                loop: true,
                autoplayHoverPause: true,
            },
            768:
                {
                    items: 2,
                    loop: true,
                    autoplayHoverPause: true
                },
            992:
                {
                    loop: true,
                    items: 3,
                    autoplayHoverPause: true
                },
            1200:
                {
                    loop: true,
                    items: 3,
                    autoplayHoverPause: true
                }
        }
    });

    var subDesc = [
        [
            'Продолжительность 1 день',
            '3 прогноза в день',
            'Прогнозы от ИИ',
            'Нет ПО для расчета'
        ],
        [
            'Продолжительность 5 дней',
            '3 прогноза в день',
            'Прогнозы от ИИ',
            'Нет ПО для расчета'
        ],
        [
            'Продолжительность 7 дней',
            '5 прогнозов в день',
            'Прогнозы от ИИ',
            'ПО для расчета + гарантия'
        ],
        [
            'Продолжительность 7 дней',
            'Безлимит',
            'Прогнозы от ИИ',
            'ПО для расчета + гарантия'
        ]
    ];

    var subDescEn = [
        [
            'Duration 1 day',
            '3 predictions per day',
            'Forecasts from AI',
            'No calculator'
        ],
        [
            'Duration 5 days',
            '3 predictions per day',
            'Forecasts from AI',
            'No calculator'
        ],
        [
            'Duration 7 days',
            '5 predictions per day',
            'Forecasts from AI',
            'Bet calculator + guarantee'
        ],
        [
            'Duration 7 days',
            'Unlimited predictions',
            'Forecasts from AI',
            'Bet calculator + guarantee'
        ]
    ];

    $('#profit-calculator .subs-container .sub').on('click', function ()
    {
        $('#profit-calculator .subs-container .sub').removeClass('selected');
        $(this).addClass('selected');

        var value = $('input[type="range"]').val();
        $('.amount-select .output').text(value + 'р');

        var selectedSubId = $(this).data('id');

        $('#profit-calculator .sub-info li').each(function (index, element)
        {
            if (language === 'ru')
            {
                $(element).text(subDesc[selectedSubId][index]);
            }
            else
            {
                $(element).text(subDescEn[selectedSubId][index]);
            }
        });

        var selectedSub = $('#profit-calculator .subs-container .selected');

        if (selectedSub.data('ai') === 1)
        {
            if (language === 'ru')
            {
                $('.amount-select .vector .name').text('Начальный вектор');
            }
            else
            {
                $('.amount-select .vector .name').text('Start vector');
            }

            $('.amount-select .vector .explain').show();
        }
        else
        {
            if (language === 'ru')
            {
                $('.amount-select .vector .name').text('Средняя сумма ставки');
            }
            else
            {
                $('.amount-select .vector .name').text('Average bet amount');
            }

            $('.amount-select .vector .explain').hide();
        }

        var sub_id = selectedSub.data('id');
        var sub_price = selectedSub.data('price');
        var sub_duration = selectedSub.data('duration');
        var dayLimit = selectedSub.data('day-limit');

        var result = 0.7;
        var profit = 0;

        profit = getProfit(sub_id, sub_price, sub_duration, dayLimit, result, 1.65, value, true);

        $('.profit-amount .value').text(profit);
    });

    $('input[type="range"]').rangeslider({
        polyfill: false,
        onInit: function ()
        {
            var value = $('input[type="range"]').val();
            $('.amount-select .output .value').text(value);

            var selectedSub = $('#profit-calculator .subs-container .selected');

            var sub_id = selectedSub.data('id');
            var sub_price = selectedSub.data('price');
            var sub_duration = selectedSub.data('duration');
            var dayLimit = selectedSub.data('day-limit');

            var result = 0.7;
            var profit = 0;

            profit = getProfit(sub_id, sub_price, sub_duration, dayLimit, result, 1.65, value, true);

            $('.profit-amount .value').text(profit);
        },
        onSlide: function (position, value)
        {
            $('.amount-select .output .value').text(value);

            var selectedSub = $('#profit-calculator .subs-container .selected');

            var sub_id = selectedSub.data('id');
            var sub_price = selectedSub.data('price');
            var sub_duration = selectedSub.data('duration');
            var dayLimit = selectedSub.data('day-limit');

            var result = 0.7;
            var profit = 0;

            profit = getProfit(sub_id, sub_price, sub_duration, dayLimit, result, 1.65, value, true);

            $('.profit-amount .value').text(profit);
        }
    });


    function getProfit(subId, subPrice, subDuration, dayLimit, result, coef, amount)
    {

        var profit = 0;

        switch (subId)
        {
            case 0:
                profit = (subDuration * dayLimit * result) * (coef * amount) - (subDuration * dayLimit * (1 - result)) * amount - dayLimit * subDuration * amount * result - subPrice;
                break;
            case 1:
                profit = (subDuration * dayLimit * result) * (coef * amount) - (subDuration * dayLimit * (1 - result)) * amount - dayLimit * subDuration * amount * result - subPrice;
                break;
            case 2:
                profit = amount * 6.8 - amount - subPrice;
                break;
            case 3:
                profit = amount * 9.6 - amount - subPrice;
                break;
        }

        return profit.toFixed();
    }


    $('#about-ai-2 .type-4').bind('transitionend webkitAnimationEnd oanimationend msAnimationEnd animationend',
        function ()
        {
            $('#about-ai-2 .type').removeClass('animated');
            $('#about-ai-2 .money').addClass('animated');
            setTimeout(function ()
            {
                $('#about-ai-2 .type').addClass('animated');
                $('#about-ai-2 .money').removeClass('animated');
            }, 2000);
        });

    $()
});