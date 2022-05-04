$( document ).ready(function() {
    $('.ui-nav__link--parent').click(function() {
        $('.active-menu').removeClass('active-menu');
        $(this).addClass('active-menu')
        if($(this).attr('href') === '#js-dashboard-app-1'){
            $('#js-dashboard-app-2').css('display', 'none');
            $('#js-dashboard-app-1').css('display', 'block');
        }else if(($(this).attr('href') === '#js-dashboard-app-2')){
            $('#js-dashboard-app-1').css('display', 'none');
            $('#js-dashboard-app-2').css('display', 'block');
        }
    })
});