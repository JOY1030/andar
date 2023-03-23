$(function(){
    /**
     * 스크롤 gnb
     * 
     */
     $(window).scroll(function(){

        curr=$(this).scrollTop();
        if (curr > 0) {
            $('.header').addClass('fixed');
        } else {
            $('.header').removeClass('fixed');
        }

    });

    $(window).trigger('scroll');

    $('#openBtn').click(function (e) { 
        $('.gnb-area').toggleClass('on');
        $('.all-area').stop().slideToggle();
        
    });

    /**
     * 
     * 슬라이드 배너 01
     */
     var swiper = new Swiper(".sc-banner01 .swiper", {
         
        effect: "fade",
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
      });
    /**
     * 슬라이드1
     */

     var swiper = new Swiper(".sc-slide .swiper", {
         
        effect: "fade",
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".pagination",
          clickable: true,
        },
      });

      /**
       * 슬라이드2
       */
       var swiper = new Swiper(".sc-category .swiper", {
        slidesPerView: 2.2,
        spaceBetween: 10,
        grabCursor: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

      /**
       * nav메뉴
       */
    $('.header .btn-menu').click(function(e){
        e.preventDefault();

        $('.gnb-side').addClass('on');
        $('body').addClass('active');
    })
    $('.btn-close, .dimmed').click(function(e){
        e.preventDefault();
        $('.gnb-side').removeClass('on')
        $('body').removeClass('active');
    })

    /**
     * search-side
     */

    $('.btn-search').click(function(e){
        e.preventDefault();
        $('.search-side').addClass('open');
    })
    $('.search-side .btn-close').click(function(){

        $('.search-side').removeClass('open');
    })

    /**
     * 사이드메뉴 드롭메뉴
     */

     $('.gnb-item .title').click(function(e){
        e.preventDefault();
        $(this).siblings('.sub-list').slideToggle();
        $(this).toggleClass('on');
    })
    
    /**
     * 버튼 업
     * let lastScroll; //재할당 가능한 변수 선언문
     * $(window).scroll(function(){})
     */

    // $(window).scroll(function(){
        
    //     if ($(this).scrollTop() > 1000) {
    //         $('.btn-side').fadeIn();
    //     } else {
    //         $('.btn-side').fadeOut();
    //     }
    // })
    $('.fix-btn').click(function(e){
        e.preventDefault();
        window.scrollTo({top:0,behavior:'smooth'});
    })
    
    let lastScroll=0;//재할당 가능한 변수 선언문
    $(window).scroll(function(){

        curr = $(this).scrollTop();

            if (curr > lastScroll) {
                $('.fix-btn').removeClass('show');
            } else {
                $('.fix-btn').addClass('show');
            }

            if(curr < 200){
                $('.fix-btn').removeClass('show');
            }
            lastScroll = curr;
    })
})