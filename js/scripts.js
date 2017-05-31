
	$(function(){
		     $(".nav-hid").hide();
		     $(".hamburger-icon,.nav-hid").on("click", function () {
		         $('.nav-hidden').removeClass("nav-hidden");
		         $(".nav-hid").fadeToggle("slow");
		     });
	});

		

    $(function(){
        $(".hamburger-icon,.nav-hid").on("click",function(){
            $(".hamburger-icon span:nth-child(1)").toggleClass("hamburger-x-1");
            $(".hamburger-icon span:nth-child(2)").toggleClass("hamburger-x-2");
            $(".hamburger-icon span:nth-child(3)").toggleClass("hamburger-x-3");
        });
    });

		

    $(function(){
        $(window).on("load resize", function(){
            $(".fill-screen").css("height", window.innerHeight);
        });
    });

	

    $(function () {
        $(".down-button").on("click", function () {
            $("body").animate({
                scrollTop: ($(this).parents("div").next().offset().top)
            }, 800);
        });
    });

    if (window.matchMedia("(max-width: 992px)").matches) {
        $(function () {
            $('.others-1, .others-2, .others-3').css('filter', 'opacity(100%)');
        });
    };