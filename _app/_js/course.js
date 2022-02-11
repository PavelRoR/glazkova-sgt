$(document).ready(function () {

    /* Якорь */
    $("a[href='#prices']").click(function (h) {
        h.preventDefault();
        var f = $(this).attr("href"),
            g = $(f).offset().top;
        $("body,html").animate({
            scrollTop: g
        }, 1500)
    });
    $("#module-1, #module-2, #module-3").tabs({
        hide: {
            effect: "fade",
            duration: 100
        },
        show: {
            effect: "fade",
            duration: 100
        }
    });
    $(function () {
        $('.modules-title').on('click', function () {
            // $(this).removeClass('mgToggle').next().slideUp(500);
            // $('.modules-title').removeClass('mgToggle');
            if (!$(this).hasClass('mgToggle')) {
                $(this).addClass('mgToggle').next().slideDown(500);
            } else {
                $(this).removeClass('mgToggle').next().slideUp(500);
            }
        });
    });
    $(function () {
        $('.general-list-show').on('click', function () {
            if (!$(this).hasClass('mgToggle')) {
                $(this).addClass('mgToggle').next().slideDown(500);
            } else {
                $(this).removeClass('mgToggle').next().slideUp(500);
            }
        });
    });
    $('.text-rev-link').magnificPopup({
        type: 'image',
        mainClass: 'mfp-fade',
        gallery: {
            enabled: true
        }
    });
    $('.revs-slider-text').slick({
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        speed: 300,
        arrows: true,
        centerPadding: '20px',
        // centerPadding: '40px',
        // adaptiveHeight: true,
        centerMode: true,
        prevArrow: '<button type="button" class="slick-prev">‹</button>',
        nextArrow: '<button type="button" class="slick-next">›</button>',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }]
    });
    /*Видео-отзывы*/
    $(".video-wrapper-rev").click(function () {
        $(".video-wrapper-rev iframe").each(function () {
            var l = $(this).parent().attr('data-img');
            $(this).parent().html('<img src="' + l + '" alt="Видео отзыв"><div class="yt-button"></div>');
        })
        var a = $(this).attr("data-youtube");
        $(this).html('<iframe src="https://www.youtube.com/embed/' + a + '?showinfo=0&rel=0&autoplay=1&mute=1&modestbranding=1" allowfullscreen></iframe>')
    });
    /*Конец документа*/
});