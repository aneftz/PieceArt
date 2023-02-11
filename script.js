$(document).ready(function() {
$('.burger_menu').click(function(event) {
    $('.burger_menu,.menu').toggleClass('active');
    $('body').toggleClass('lock');
})
});