$(function() {

    $('.button__inner').click(function() {
        $('.device__item__price').css({'opacity' : '0.7'});
        $('.device__item__cross').css({'width' : '60px'});
        $('.device__item__sale').css({'width' : '60px', 'margin-left' : '15px'});
        $('.device__item__price').each(function(index) {
            let price = $(this).children('span').text() * 0.9;
            console.log(price, price.toFixed());
            $('.device__item__sale').eq(index).children('span').text(price.toFixed());
        });
    });

});