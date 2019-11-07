$(document).ready(function() {

    // On recupere la position du bloc par rapport au haut du site
    var position_top_raccourci = $("header").offset().top;
    var mid_windows = $(window).height() / 2;
    console.log(mid_windows + "px");


//Au scroll dans la fenetre on déclenche la fonction
    $(window).scroll(function () {

//si on a defile de plus de 150px du haut vers le bas
        if ($(this).scrollTop() > position_top_raccourci) {

//on ajoute la classe "fixNavigation" a <div id="navigation">
            $('.header').addClass("fixNavigation");
            //$(".header").css('left', '0');
            $(".header").css('width', '100%');
        } else {

//sinon on retire la classe "fixNavigation" a <div id="navigation">
            $('.header').removeClass("fixNavigation");
            $(".header").css('left', '50%');
            $(".header").css('width', '65%');
        }


        $('.hidden').each( function(i){

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object  ){

                $(this).animate({'opacity':'1'},500);

            }

        });
    });

    // Rotation du logo
    $(".header .header-logo img").hover(function(){
        $(this).toggleClass('flip');
    });

    //Typewriter.js
    var demo = document.getElementById('twriter');


    $(".banner h1").css('opacity','1');
    $(".banner a").css('opacity','1');


    setTimeout(function(){
        var typewriter = new Typewriter(demo, {
            cursor: '_',
            loop: true,
        });
        typewriter.typeString('Développeur full-stack')
            .pauseFor(2500)
            .deleteAll()
            .typeString('Étudiant en DUT Informatique')
            .pauseFor(2500)
            .deleteAll()
            .start();
    },1000);

    //Tabs
    $("#tabs-all").click(function() {
        $("#tabs-all").addClass("is-active");
        $("#tabs-prog").removeClass("is-active");
        $("#tabs-graph").removeClass("is-active");
    });

    $("#tabs-prog").click(function() {
        $("#tabs-all").removeClass("is-active");
        $("#tabs-prog").addClass("is-active");
        $("#tabs-graph").removeClass("is-active");
    });

    $("#tabs-graph").click(function() {
        $("#tabs-all").removeClass("is-active");
        $("#tabs-prog").removeClass("is-active");
        $("#tabs-graph").addClass("is-active");
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

    //Carousel
});

