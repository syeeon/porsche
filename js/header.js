// $(window).resize(function(){
//     if(window.innerWidth > 1024){
//         $(".header_models li >div, .more_box .dep_2, .nav_bg").hide();

//         $('.model_1').mouseover(function(){
//             $('.nav_bg, .dep_718').slideDown("fast")
//             $('.nav_bg').slideDown("fast")
//         })
//         $('.dep_718, .model_1').mouseleave(function(){
//             $('.dep_718, .nav_bg').slideUp("fast")
//         })
    
//         $('.model_2').mouseover(function(){
//             $('.nav_bg, .dep_911').slideDown("fast")
//         })
//         $('.dep_911, .model_2').mouseleave(function(){
//             $('.dep_911, .nav_bg').slideUp("fast")
//         })
    
//         $('.model_3').mouseover(function(){
//             $('.nav_bg, .dep_taycan').slideDown("fast")
//         })
//         $('.dep_taycan, .model_3').mouseleave(function(){
//             $('.dep_taycan, .nav_bg').slideUp("fast")
//         })
    
//         $('.model_4').mouseover(function(){
//             $('.nav_bg, .dep_panamera').slideDown("fast")
//         })
//         $('.dep_panamera, .model_4').mouseleave(function(){
//             $('.dep_panamera, .nav_bg').slideUp("fast")
//         })
    
//         $('.model_5').mouseover(function(){
//             $('.nav_bg, .dep_macan').slideDown("fast")
//         })
//         $('.dep_macan, .model_5').mouseleave(function(){
//             $('.dep_macan, .nav_bg').slideUp("fast")
//         })
    
//         $('.model_6').mouseover(function(){
//             $('.nav_bg, .dep_cayenne').slideDown("fast")
//         })
//         $('.dep_cayenne, .model_6').mouseleave(function(){
//             $('.dep_cayenne, .nav_bg').slideUp("fast")
//         })
    
//         /* more_box*/
//         $('.more_box a').mouseover(function(){
//             $('.nav_bg, .more_box .dep_2').slideDown("fast")
//         })
//         $('.more_box .dep_2').mouseleave(function(){
//             $('.nav_bg, .more_box .dep_2').slideUp("fast")
//         })
//     }
// })



$(document).ready(function(){   

    $(".header_models li >div, .more_box .dep_2, .nav_bg").hide();

    $('.model_1').mouseover(function(){
        $('.dep_718').slideDown("fast")
        $('.nav_bg').stop().slideDown("fast")
    })
    $('.m_718').mouseleave(function(){
        $('.dep_718, .nav_bg').slideUp("fast")
    })

    $('.model_2').mouseover(function(){
        $('.dep_911').slideDown("fast")
        $('.nav_bg').stop().slideDown("fast")
    })
    $('.dep_911, .model_2').mouseleave(function(){
        $('.dep_911, .nav_bg').slideUp("fast")
    })

    $('.model_3').mouseover(function(){
        $('.dep_taycan').slideDown("fast")
        $('.nav_bg').stop().slideDown("fast")
    })
    $('.dep_taycan, .model_3').mouseleave(function(){
        $('.dep_taycan, .nav_bg').slideUp("fast")
    })

    $('.model_4').mouseover(function(){
        $('.dep_panamera').slideDown("fast")
        $('.nav_bg').stop().slideDown("fast")
    })
    $('.dep_panamera, .model_4').mouseleave(function(){
        $('.dep_panamera, .nav_bg').slideUp("fast")
    })

    $('.model_5').mouseover(function(){
        $('.dep_macan').slideDown("fast")
        $('.nav_bg').stop().slideDown("fast")
    })
    $('.dep_macan, .model_5').mouseleave(function(){
        $('.dep_macan, .nav_bg').slideUp("fast")
    })

    $('.model_6').mouseover(function(){
        $('.dep_cayenne').slideDown("fast")
        $('.nav_bg').stop().slideDown("fast")
    })
    $('.dep_cayenne, .model_6').mouseleave(function(){
        $('.dep_cayenne, .nav_bg').slideUp("fast")
    })

    /* more_box*/
    $('.more_box a').mouseover(function(){
        $('.more_box .dep_2').slideDown("fast")
        $('.nav_bg').stop().slideDown("fast")
    })
    $('.more_box .dep_2').mouseleave(function(){
        $('.nav_bg, .more_box .dep_2').slideUp("fast")
    })

})

// $(window).resize(function(){
//     if(window.innerWidth < 1024){
//         // $('.link_wrap div a').hide();

//         $('.menu').click(function(){
//             $('.nav_bg').show()
//             $('this').not().step()
//         })

//         $('.link_wrap h3').eq(1).click(function(){
//             $('.link_wrap h3').eq(1).nextAll('a').slideToggle()
//             $('this').not().step()
//         })

//         $('.link_wrap h3').eq(2).click(function(){
//             $('.link_wrap h3').eq(2).nextAll('a').slideToggle()
//             $('this').not().step()
//         })

//         $('.link_wrap h3').eq(3).click(function(){
//             $('.link_wrap h3').eq(3).nextAll('a').slideToggle()
//             $('this').not().step()
//         })
//     }
// })