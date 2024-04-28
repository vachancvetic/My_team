document.querySelector(".btn").addEventListener("click",function(){
    document.querySelector(".menu2").classList.toggle("gg");
    }),
    document.querySelector(".bubn1").addEventListener("click",function(){
      document.querySelector(".papa").classList.toggle("luffy");
      });
      document.querySelector(".bubn2").addEventListener("click",function(){
        document.querySelector(".papa1").classList.toggle("zoro");
        });
      
    
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView:3,
        spaceBetween:30,
        
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          
        },
        breakpoints: {
          1200: {
              slidesPerView: 3,
              spaceBetween: 18,
          },
          700: {
              slidesPerView: 2,
              spaceBetween: 25,
          },
          130:{
            slidesPerView: 1,
            spaceBetween: 25,
          }
      },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',

        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
          
        },
        
      });
      $('.flex a').on('click',function(event){
        var $anchor = $(this);
        $('html, body').animate({
          scrollTop: $($anchor.attr('href')).offset().top + "px"
        }, 1500);
        event.preventDefault();
     });

    
    
   
 