$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.topmenu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});