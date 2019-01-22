$(function () {
    var selectedClass = "";
    $(".btn").click(function () {
        $("#typeselect>button.active").removeClass("active");
        $(this).addClass("active");
        selectedClass = $(this).attr("data-rel");
        $("#portfolio").fadeTo(100, 0);
        $("#portfolio div").not("." + selectedClass).fadeOut();
        setTimeout(function () {
            $("." + selectedClass).fadeIn().addClass('scale-anm');
            $("#portfolio").fadeTo(300, 1);
        }, 300);

    });
});