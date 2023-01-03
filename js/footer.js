$(window).resize(function(){
    if(window.innerWidth < 768){
        $('.link_wrap div a').hide();

        $('.link_wrap h3').eq(0).click(function(){
            $('.link_wrap h3').eq(0).nextAll('a').slideToggle()
            // $(this).not().stop()

        })

        $('.link_wrap h3').eq(1).click(function(){
            $('.link_wrap h3').eq(1).nextAll('a').slideToggle()
            // $(this).not().stop()
        })

        $('.link_wrap h3').eq(2).click(function(){
            $('.link_wrap h3').eq(2).nextAll('a').slideToggle()
            // $(this).not().stop()
        })

        $('.link_wrap h3').eq(3).click(function(){
            $('.link_wrap h3').eq(3).nextAll('a').slideToggle()
            // $(this).not().stop()
        })
    }
})