$(".header__search").click(function() {
    $(this).toggleClass("active");
    $(".search__input").toggleClass("active");
});
$(".header__burgir").click(function() {
    if($(".header__burgir").hasClass("active")) {
        $(".header__burgir").removeClass("rotate");
        $(".header__navbar").removeClass("active");
        $(".header").removeClass("open");
        setTimeout(function() {
            $(".header__burgir").removeClass("active");
        },300);
    } else {
        $(".header__burgir").addClass("active");
        $(".header__navbar").addClass("active");
        $(".header").addClass("open");
        setTimeout(function() {
            $(".header__burgir").addClass("rotate");
        },300);
    }
});

$(window).scroll(function(){
    if ( $(this).scrollTop() > 1) {
        $(".header").addClass("fixed");
    } else {
        $(".header").removeClass("fixed");
    }
});

$(".modal-open").click(function() {
    $(".modal").addClass("active");
});
$(".modal__btn").click(function() {
    $(".modal").addClass("done");
});

$(".modal__back").click(function() {
    $(".modal").removeClass("active");
    $(".modal").removeClass("done");
});
$(".modal__close").click(function() {
    $(".modal").removeClass("active");
    $(".modal").removeClass("done");
});