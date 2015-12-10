(function ($, root, undefined) {
    $(function(){
        $(document).ready(function(){
            var mySwiper = new Swiper ('.home .swiper-container', {
                loop: true,
                onSlideChangeEnd: function(slider){
                    $(".swiper-nav li").removeClass("active");
                    $(".swiper-nav li").eq(slider.activeIndex - 1).addClass("active");
                }
            });
            $(".home .swiper-nav li").hover(function(){
                var index = $(this).index();
                mySwiper.slideTo(index + 1);
            })

            //show hide menu on mobile
            $(".show-nav").click(function(){
                $(".swiper-nav ul").toggleClass("hide show");
            });
            $(".show-mobile-menu a").click(function(e){
                e.preventDefault();
                $("header").toggleClass("relative no-relative");
                $(this).toggleClass("active");
                $("#wrapper").toggleClass("wrapper-slide wrapper-slide-show");
            });
            $(".menu-item-has-children").each(function(){
                var ul = $(this).children("ul");
                ul.prepend("<li class='return-up'><a href=''>Back</a></li>");
            });
            $(".menu-item-has-children > a").click(function(e){
                e.preventDefault();
                $(this).next("ul").addClass("sub-menu-show");
                var z_index = $(this).closest(".sub-menu-show").css("zIndex");
                $(this).next("ul").css( "zIndex", z_index + 1);
            });
            $(".return-up a").on("click", function(e){
                e.preventDefault();
                $(this).closest(".sub-menu-show").removeClass("sub-menu-show");
            });

            //show hide sidebar list
            if($("#slide:visible").length > 0){
                $(".show-next").click(function(e){
                    $(this).next().toggleClass("close-list");
                    e.preventDefault();
                })
            }
        })
    });
})(jQuery, this);
