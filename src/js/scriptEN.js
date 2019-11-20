$(window).on('load', function() {
    var demo = document.getElementById('twriter');
    $(".preloader").fadeOut(2000);
    setTimeout(function() {
        $(".banner h1").css('opacity','1');
        $(".banner a").css('opacity','1');


        setTimeout(function(){
            var typewriter = new Typewriter(demo, {
                cursor: '_',
                loop: true,
            });
            typewriter.typeString('Full-stack developer')
                .pauseFor(2500)
                .deleteAll()
                .typeString('Student in computer science')
                .pauseFor(2500)
                .deleteAll()
                .start();
        },800);
    },1500);
});

$(document).ready(function() {
    var position_top_raccourci = $("header").offset().top;

    var skills = $("#skills").offset().top - 10;
    var project = $("#projects").offset().top -10;
    var about = $("#about").offset().top - 10;
    var contact = $("#contact").offset().top - 10;

    console.log(contact)

    var mid_windows = $(window).height() / 2;
    console.log(mid_windows + "px");

    var lvlscroll = $(this).scrollTop();
    // Navbar fix
    if ($(window).scrollTop() > position_top_raccourci) {

        $('.header').addClass("fixNavigation");
        //$(".header").css('left', '0');
        $(".header").css('width', '100%');
    } else {

        $('.header').removeClass("fixNavigation");
        $(".header").css('left', '50%');
        $(".header").css('width', '65%');
    }

    // Menu
    if (lvlscroll < about){
        $(".header-logo img, .navbar-image img").addClass("filter-color");
        $(".lien-about").removeClass("actest");
    }

    if ((lvlscroll > about)&&(lvlscroll < skills)) {
        $(".header-logo img, .navbar-image img").removeClass("filter-color");
        $(".lien-skills").removeClass("actest");
        $('.lien-about').addClass("actest");
        console.log("Oui");
    }

    if ((lvlscroll > skills) && (lvlscroll < project)) {
        $(".lien-about").removeClass("actest");
        $(".lien-projet").removeClass("actest");
        $('.lien-skills').addClass("actest");
    }

    if ((lvlscroll > project) && (lvlscroll < contact)) {
        $(".lien-skills").removeClass("actest");
        $(".lien-contact").removeClass("actest");
        $('.lien-projet').addClass("actest");
    }
    if (lvlscroll > contact) {
        $(".lien-projet").removeClass("actest");
        $('.lien-contact').addClass("actest");
    }

    $(window).scroll(function () {
        lvlscroll = $(this).scrollTop();
        // Navbar fix
        if ($(this).scrollTop() > position_top_raccourci) {

            $('.header').addClass("fixNavigation");
            //$(".header").css('left', '0');
            $(".header").css('width', '100%');
        } else {

            $('.header').removeClass("fixNavigation");
            $(".header").css('left', '50%');
            $(".header").css('width', '65%');
        }

        // Menu
        if (lvlscroll < about-10){
            $(".header-logo img, .navbar-image img").addClass("filter-color");
            $(".lien-about").removeClass("actest");
        }

        if ((lvlscroll > about-10)&&(lvlscroll < skills)) {
            $(".header-logo img, .navbar-image img").removeClass("filter-color");
            $(".lien-skills").removeClass("actest");
            $('.lien-about').addClass("actest");
            console.log("Oui");
        }

        if ((lvlscroll > skills) && (lvlscroll < project)) {
            $(".lien-about").removeClass("actest");
            $(".lien-projet").removeClass("actest");
            $('.lien-skills').addClass("actest");
        }

        if ((lvlscroll > project) && (lvlscroll < contact)) {
            $(".lien-skills").removeClass("actest");
            $(".lien-contact").removeClass("actest");
            $('.lien-projet').addClass("actest");
        }
        if (lvlscroll > contact) {
            $(".lien-projet").removeClass("actest");
            $('.lien-contact').addClass("actest");
        }


        $('.hidden').each( function(i){

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if( bottom_of_window > bottom_of_object-50  ){

                $(this).animate({'opacity':'1'},500);

            }

        });
    });

    // Rotation du logo
    $(".header .header-logo img").hover(function(){
        $(this).toggleClass('flip');
    });

    $("footer .footer-image img").hover(function(){
        $(this).toggleClass('flip');
    });

    //Tabs
    $("#tabs-all").click(function() {
        $("#tabs-all").addClass("is-active");
        $("#tabs-prog").removeClass("is-active");
        $("#tabs-graph").removeClass("is-active");

        $(".prog").show();
        $(".graph").show();

    });

    $("#tabs-prog").click(function() {
        $("#tabs-all").removeClass("is-active");
        $("#tabs-prog").addClass("is-active");
        $("#tabs-graph").removeClass("is-active");

        $(".prog").show();
        $(".graph").hide();
    });

    $("#tabs-graph").click(function() {
        $("#tabs-all").removeClass("is-active");
        $("#tabs-prog").removeClass("is-active");
        $("#tabs-graph").addClass("is-active");

        $(".graph").show();
        $(".prog").hide();
    });

    //Modals
    var carousel = null;

    $("a.eggstronaut").click(function() {
        $("#eggstronaut").addClass("is-active");
        carousel = $('.slider-eggstronaut').bxSlider({
            auto: true,
            pause: 2500,
        });
    });

    $("a.gk").click(function() {
        $("#gk").addClass("is-active");
        carousel = $('.slider-gk').bxSlider({
            auto: true,
            pause: 2500,
        });
    });

    $("a.portfolio").click(function() {
        $("#portfolio").addClass("is-active");
        carousel = $('.slider-portfolio').bxSlider({
            auto: true,
            pause: 2500,
        });
    });

    $("button.delete").click(function() {
        $(".modal").removeClass("is-active");
        carousel.destroySlider();
        carousel = null;
    });

    $("*").keyup(function(e) {
        if (e.key === "Escape") {
            $(".modal").removeClass("is-active");
            carousel.destroySlider();
            carousel = null;
        }
    });

    var cache = true;

    $(".dropdown").click(function(){
        if (cache == false){
            cache = true;
            $(".dropdown-menu").addClass("is-hidden");
        }
        else {
            cache = false;
            $(".dropdown-menu").removeClass("is-hidden");
        }
    });

});

