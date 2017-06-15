var mySwiper=new Swiper(".swiper-container",{
			direction:"vertical",
			onInit:function(swiper){
				swiperAnimateCache(swiper); //隐藏动画元素 
    			swiperAnimate(swiper); //初始化完成开始动画
			},
			onSlideChangeEnd:function(swiper){
				swiperAnimate(swiper); //初始化完成开始动画
				if(swiper.activeIndex == 3){				
					$(".fourthPage-line").css("animation","lineHeight 2s linear forwards");
				}
				else{				   	
					$(".fourthPage-line").css("animation"," ");
				}						
			}
});
