$(document).ready(function () {
    // ==============標題點擊效果=================
    $('#newsAll_classification_all').click(function () {
        $('.choosenBar2').css('left', '0%');
        $(this).css('color', '#172852');
        $(this).siblings().css('color', '#cba89a');
        $('.newsPart1').fadeIn(700);
        $('.news_blockAll > div').not('.newsPart1').hide();
    });

    $('#newsAll_classification_product').click(function () {
        $('.choosenBar2').css('left', '20%');
        $(this).css('color', '#172852');
        $(this).siblings().css('color', '#cba89a');
        $('.newsPart2').fadeIn(700);
        $('.news_blockAll > div').not('.newsPart2').hide();
    });

    $('#newsAll_classification_activity').click(function () {
        $('.choosenBar2').css('left', '40%');
        $(this).css('color', '#172852');
        $(this).siblings().css('color', '#cba89a');
        $('.newsPart3').fadeIn(700);
        $('.news_blockAll > div').not('.newsPart3').hide();
    });

    $('#newsAll_classification_report').click(function () {
        $('.choosenBar2').css('left', '60%');
        $(this).css('color', '#172852');
        $(this).siblings().css('color', '#cba89a');
        $('.newsPart4').fadeIn(700);
        $('.news_blockAll > div').not('.newsPart4').hide();
    });

    $('#newsAll_classification_shop').click(function () {
        $('.choosenBar2').css('left', '80%');
        $(this).css('color', '#172852');
        $(this).siblings().css('color', '#cba89a');
        $('.newsPart5').fadeIn(700);
        $('.news_blockAll > div').not('.newsPart5').hide();
    });
})