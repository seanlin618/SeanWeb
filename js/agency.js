/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('#btnfood').on('click',function(){
    $('#portfolioModal1').modal('hide');
    $('#videofood').remove();
    $('.tv').remove();
})

$('#closefood').on('click',function(){
    $('#portfolioModal1').modal('hide');
    $('#videofood').remove();
    $('.tv').remove();
})
$('#foodOpen').on('click',function(){
    $('#portfolioModal1').modal('show');
    $('#pvideo').append('<img class="tv" src="img/portfolio/tv.png" alt="">');
    $('#pvideo').append('<iframe id="videofood" width="420" height="315" src="https://www.youtube.com/embed/q7e-hIru8qE" frameborder="0" allowfullscreen></iframe>');
})