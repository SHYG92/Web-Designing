$(document).ready(function() {
    $("body").jpreLoader({
        splashID: "#jSplash",
        autoClose: !0,
        splashFunction: function() {
            $("#jSplash").children("section").not(".selected").hide(), $("#jSplash").hide().fadeIn(800)
        }
    }, function() {
        setTimeout(function() {
            $("body,html").scrollTop(1), $(".container").fadeIn("slow")
        }, 1e3)
    })
}), $.jInvertScroll([".scroll"], {
    width: "23000",
    height: "23000"
}), 
    $(window).on("scroll", function() {
    scrollPosition = $(this).scrollTop(), $(".car").html("<img src='images/haiti.svg' />"),    
    scrollPosition < 600 && ($(".progress").fadeOut(), $(".car").fadeOut()), scrollPosition < 600 && $(".era").fadeOut(), scrollPosition >= 600 && ($(".progress").fadeIn(), $(".car").fadeIn(), $(".progress a").removeClass("active"), $(".progress .1910").removeClass("active"), $(".progress .1900").addClass("active"), $(".era-one").fadeIn(), $(".measure-one").fadeIn()), 
    scrollPosition >= 3100 && ($(".progress .1920").removeClass("active"), $(".progress .1910").addClass("active"), $(".era-two").fadeIn(), $(".measure-two").fadeIn()), 
    scrollPosition >= 5300 && ($(".progress .1930").removeClass("active"), $(".progress .1920").addClass("active"), $(".era-three").fadeIn(), $(".measure-three").fadeIn()), 
    scrollPosition >= 7430 && ($(".progress .1940").removeClass("active"), $(".progress .1930").addClass("active"), $(".era-four").fadeIn(), $(".measure-four").fadeIn()), 
    scrollPosition >= 9605 && ($(".progress .1950").removeClass("active"), $(".progress .1940").addClass("active"), $(".era-five").fadeIn(), $(".measure-five").fadeIn()), 
    scrollPosition >= 11630 && ($(".progress .1960").removeClass("active"), $(".progress .1950").addClass("active"), $(".era-six").fadeIn(), $(".measure-six").fadeIn()), 
    scrollPosition >= 13800 && ($(".progress .1970").removeClass("active"), $(".progress .1960").addClass("active"), $(".era-seven").fadeIn(), $(".measure-seven").fadeIn()), 
    scrollPosition >= 16000 && ($(".progress .1980").removeClass("active"), $(".progress .1970").addClass("active"), $(".era-eight").fadeIn(), $(".measure-eight").fadeIn()), 
    scrollPosition >= 17900 && ($(".progress .1990").removeClass("active"), $(".progress .1980").addClass("active"), $(".era-nine").fadeIn(), $(".measure-nine").fadeIn()), 
    scrollPosition >= 20170 && ($(".progress .2000").removeClass("active"), $(".progress .1990").addClass("active"), $(".era-ten").fadeIn(), $(".measure-ten").fadeIn()), 
    scrollPosition >= 600 && $(".progress .2020").addClass("active"), $(".carwrap").css("bottom", "100px"), 
    scrollPosition >= 3100 && $(".car").html("<img src='images/indonesia.svg' />"), 
    scrollPosition >= 5300 && $(".car").html("<img src='images/kashmir.svg' />"), 
    scrollPosition >= 7430 && $(".car").html("<img src='images/iran.svg' />"), 
    scrollPosition >= 9605 && ($(".car").html("<img src='images/japan.svg' />"), $(".carwrap").css("bottom", "160px")), 
    scrollPosition >= 11630 && ($(".car").html("<img src='images/india.svg' />"), $(".carwrap").css("bottom", "100px")), 
    scrollPosition >= 13800 && ($(".car").html("<img src='images/china.svg' />"), $(".carwrap").css("bottom", "100px")), 
    scrollPosition >= 16000 && ($(".car").html("<img src='images/nipal.svg' />"), $(".carwrap").css("bottom", "150px")), 
    scrollPosition >= 17900 && ($(".car").html("<img src='images/indonesia.svg' />"), $(".carwrap").css("bottom", "100px")), 
    scrollPosition >= 20170 && ($(".car").html("<img src='images/chilli.svg' />"), $(".carwrap").css("bottom", "170px"), $(".social-links").css("display", "block"))
}), 
    $(".progress a").click(function() {
    var s = $(this).attr("href");
    return "#1900" == s && $("html, body").animate({
        scrollTop: 1200
    }, 600), "#1910" == s && $("html, body").animate({
        scrollTop: 3300
    }, 600), "#1920" == s && $("html, body").animate({
        scrollTop: 5400
    }, 600), "#1930" == s && $("html, body").animate({
        scrollTop: 7630
    }, 600), "#1940" == s && $("html, body").animate({
        scrollTop: 9605
    }, 600), "#1950" == s && $("html, body").animate({
        scrollTop: 12030
    }, 600), "#1960" == s && $("html, body").animate({
        scrollTop: 14100
    }, 600), "#1970" == s && $("html, body").animate({
        scrollTop: 16300
    }, 600), "#1980" == s && $("html, body").animate({
        scrollTop: 18400
    }, 600), "#1990" == s && $("html, body").animate({
        scrollTop: 20470
    }, 600), !1
});
var lastScrollTop = 0;
$(window).scroll(function() {
    var s = $(this).scrollTop();
    s > lastScrollTop || s > 2 && $(".carwrap img").addClass(""), lastScrollTop = s
}), $(function() {
    $("a[href*=#]:not([href=#])").click(function() {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var s = $(this.hash);
            if (s = s.length ? s : $("[name=" + this.hash.slice(1) + "]"), s.length) return $("html,body").animate({
                scrollTop: s.offset().top
            }, 1e3), !1
        }
    })    
    
});