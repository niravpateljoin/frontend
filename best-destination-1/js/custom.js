jQuery(document).ready(function(){
	jQuery('.slider').bxSlider();
});

jQuery(document).ready(function(){
	jQuery('.three_cara').bxSlider({

        auto: true,
        autoControls: true,
        speed: 500,
        slideSelector: 'div',
        minSlides: 3,
        maxSlides: 3,
        moveSlides:1,
        slideWidth:500


    });
});

jQuery(document).ready(function() {
	jQuery("span.sign").click(function(){
		jQuery(this).parent().next().toggleClass('active');
	});

	/*jQuery( "#datepicker" ).datepicker();
	jQuery( "#datepicker2" ).datepicker();*/


	jQuery(".add").click(function()
    {
        var currentVal = parseInt(jQuery(this).next(".qty").val());
        if (currentVal != NaN)
        {
            jQuery(this).next(".qty").val(currentVal + 1);
        }
    });

	jQuery('.logout a.login_bt').click(function()
    {
        jQuery('.logged_in').css('display','inline-block');
        jQuery('.logout').css('display','none');
    });

	jQuery('.logged_in a.logout_bt').click(function()
    {
        jQuery('.logout').css('display','inline-block');
        jQuery('.logged_in').css('display','none');
    });

});

$(function() {
    var maxHeight = 0;
    $('.feature_block > div').each(function(){
        if (maxHeight < $(this).height()) {maxHeight = $(this).height();}
    });
    $('.feature_block > div').each(function(){
        $(this).height(maxHeight);
    });
    
});


$(function() {
    var maxHeight = 0;
    $('.more_news_section .three_box').each(function(){
        if (maxHeight < $(this).height()) {maxHeight = $(this).height();}
    });
    $('.more_news_section .three_box').each(function(){
        $(this).height(maxHeight);
    });
    
});


$(function() {
    var maxHeight = 0;
    $('.single .title > div').each(function(){
        if (maxHeight < $(this).height()) {maxHeight = $(this).height();}
    });
    $('.single .title > div').each(function(){
        $(this).height(maxHeight);
    });
    
});


if (window.matchMedia('(max-width: 767px)').matches) {

	jQuery('.three_cara').bxSlider({ 
		auto: true,
       autoControls: true,
       speed: 500,
       slideSelector: 'div',
       minSlides: 1,
       maxSlides: 1,
       moveSlides:1,
       slideWidth:767
   });

}


/*------ 01. TOP Menu Stick ------*/
$(window).on('scroll', function() {
    var scroll = $(window).scrollTop();
    if (scroll < 190) {
        $("header").removeClass("sticky");
    } else {
        $("header").addClass("sticky");
    }
});


/*search page carausal*/
jQuery(document).ready(function(){
    jQuery('.interested_cara_links').bxSlider({
        auto: true,
        autoControls: true,
        speed: 500,
        slideSelector: 'div',
        minSlides:4,
        maxSlides:4,
        moveSlides:1,
        slideWidth:500,
        slideMargin:5
    });

    

});


if (window.matchMedia('(max-width: 767px)').matches) {

        jQuery('.interested_cara_links').bxSlider({ 
            auto: true,
            autoControls: true,
            speed: 500,
            slideSelector: 'div',
            minSlides: 1,
            maxSlides: 1,
            moveSlides:1,
            slideWidth:767,
            slideMargin:60
        });

    }