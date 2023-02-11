$(document).ready(function() {
$('.burger_menu').click(function(event) {
    $('.burger_menu,.menu').toggleClass('active');
    $('body').toggleClass('lock');
})
});

$('.da_section,.services,.works,.about,.testimonials,.news,.enquiry,.footer').click((event)=>{
    if ($('.burger_menu')[0].classList.contains('active'))
    {
        let node = event.target;
        while (node.parentNode)
        {
            if (node.classList.contains('menu'))
                return;
            node = node.parentNode;
        }
        
        $('.burger_menu,.menu').toggleClass('active');
        $('body').toggleClass('lock');
    }
    console.log('kek');
});