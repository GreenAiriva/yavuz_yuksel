var Utils = {hasAttr: function (t, i) {
        return void 0 !== t.attr(i) && !1 !== t.attr(i)
    }, isMobile: function () {
        return/iPhone|iPad|iPod|Android/i.test(navigator.userAgent) && window.innerWidth < 992
    }};
function SlaytlarVideo() {
    var t = $(".slaytlar .owl-carousel");
    function a() {
        var a = t.find(".owl-item.active .slaytlar__item video");
        a.length && (a.trigger("play"), a.on("play", function () {
            t.trigger("stop.owl.autoplay")
        }), a.on("ended", function () {
            t.trigger("play.owl.autoplay")
        }))
    }
    t.owlCarousel({loop: !0, margin: 0, nav: !1, dots: 1, items: 1, mouseDrag: !1, touchDrag: !1, animateIn: "fadeIn", animateOut: "fadeOut", autoplay: !0, autoplayHoverPause: !1, smartSpeed: 1e3, autoplayTimeout: 4250, pagination: true, nav: true, loop: true, navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"]}), t.find(".owl-item .slaytlar__item").each(function () {
        var a = $(this), t = !!Utils.hasAttr(a, "data-src") && a.attr("data-src");
        t && a.append('<video playsinline="" muted=""><source src="' + t + '" type="video/mp4"></video>')
    }), a(), t.on("translated.owl.carousel", function () {
        t.find(".owl-item .slaytlar__item[data-src] video").each(function () {
            $(this).trigger("pause")
        }), a()
    });
}


$(document).ready(function () {
    $('.row-popup').magnificPopup({
        delegate: '.zoom-item',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
            verticalFit: true,
            titleSrc: function (item) {
                return "";
            }
        },
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 400, // Duration for zoom animation 
            opener: function (element) {
                return element.find('img');
            }
        }

    });
});

function YukariCik() {
    $("html, body").animate({scrollTop: 0}, "slow");
    return false;
}

$(window).resize(function () {
    YukariCikKontrol();
    ScrollKontrol();
});
$(document).ready(function () {
    YukariCikKontrol();
    ScrollKontrol();
});

function YukariCikKontrol() {
    if ($(this).scrollTop() > 500) {
        $("#yukari-cik").removeClass("displayNone");
        $("#wsSabit").addClass("wsSabitAct");
    } else {
        $("#yukari-cik").addClass("displayNone");
        $("#wsSabit").removeClass("wsSabitAct");
    }
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $("#yukari-cik").removeClass("displayNone");
            $("#wsSabit").addClass("wsSabitAct");
        } else {
            $("#yukari-cik").addClass("displayNone");
            $("#wsSabit").removeClass("wsSabitAct");
        }
    });
}

function ScrollKontrol() {
    if ($(this).scrollTop() > 0) {
        $("#body").addClass("scrollActive");
    } else {
        $("#body").removeClass("scrollActive");
    }
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $("#body").addClass("scrollActive");
        } else {
            $("#body").removeClass("scrollActive");
        }
    });
}



$(function () {

    var link = $('#sagMenuBoxes a.dot');
    var ekheight = $("#fixedTopHeight").height();

    // Move to specific section when click on menu link
    link.on('click', function (e) {
        var target = $($(this).attr('href'));
        $('html, body').animate({
            scrollTop: target.offset().top - ekheight
        }, 600);
        e.preventDefault();
    });



    $(window).on('scroll', function () {
        scrNav();
    });


    // scrNav function 
    // Change active dot according to the active section in the window
    function scrNav() {
        var sTop = $(window).scrollTop() + ekheight;
        $('section').each(function () {
            var id = $(this).attr('id'),
                    offset = $(this).offset().top - 1,
                    height = $(this).height();

            if (sTop >= offset && sTop < offset + height) {
                link.removeClass('active');
                $('#sagMenuBoxes').find('[data-scroll="' + id + '"]').addClass('active');
                $('#P' + id).addClass('active');
            }
        });
    }
    scrNav();
});


function SSS() {
    $("#sikca-sorulan-sorular li").on("click", function () {
        var li = $(this);

        li.find(".question").toggleClass("opened");
        li.find(".answer").stop().slideToggle(225);
    });

    $("#sikca-sorulan-sorular-index li").on("click", function () {
        var li = $(this);

        li.find(".question").toggleClass("opened");
        li.find(".answer").stop().slideToggle(225);
    });
}
$(document).ready(function () {
    SSS();
});




$(document).ready(function (e) {
    $(".mobileUl li ul").slideUp();
    $(".mobileUl li").click(function () {
        if ($(this).hasClass('mobileMenuOpen')) {
            $(this).removeClass("mobileMenuOpen");
            $(this).find($("ul")).slideUp();
        } else {
            $(this).addClass("mobileMenuOpen");
            $(this).find($("ul")).slideDown();
        }
    });
    $("#pageOverlay").on("touchstart click", function () {
        mobileMenuKapat();
    });
});

function mobileMenuKapat() {
    $(".mobileUl li ul").slideUp();
    $("#mobileMenu").removeClass("open");
    document.body.classList.remove("stickyPage");
    document.documentElement.classList.remove("htmlFixed");
}

function mobileMenuAc() {
    $("#mobileMenu").addClass("open");
    document.body.classList.add("stickyPage");
    document.documentElement.classList.add("htmlFixed");
}


$(document).ready(function () {
	
	var owlYorum = $("#owlYorum");
    owlYorum.owlCarousel({
        responsive: {
            0: {
                items: 1
            },
            991: {
                items: 2
            }
        },
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: false,
        margin: 0,
        pagination: false,
        nav: true,
        loop: true,
        navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"]
    });
	
});	
