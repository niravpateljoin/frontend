$(function() {
    var maxHeight = 0;
    $('.gallery > .g').each(function(){
        if (maxHeight < $(this).height()) {maxHeight = $(this).height()}
    });
    $('.gallery > .g').each(function(){
        $(this).height(maxHeight);
    });

    var maxHeight2 = 0;
    $('.gallery2 > .g').each(function(){
        if (maxHeight2 < $(this).height()) {maxHeight2 = $(this).height()}
    });
    $('.gallery2 > .g').each(function(){
        $(this).height(maxHeight2);
        $(this).next('img').height(maxHeight2);
    });

    $('.list.clearfix').each(function(){
        $(this).children().height($(this).height());
    });

    
});