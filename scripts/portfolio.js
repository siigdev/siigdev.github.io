$(function () {
    var selectedClass = "";
    $(".btn").click(function () {
        $("#typeselect>button.active").removeClass("active");
        $(this).addClass("active");
        selectedClass = $(this).attr("data-rel");
        $("#portfolio").fadeTo(100, 1);
        $("#portfolio div").not("." + selectedClass).children().fadeOut();
        setTimeout(function () {
            $("." + selectedClass).find('*').fadeIn();
            $("#portfolio").fadeTo(300, 1);
        }, 300);

    });
});