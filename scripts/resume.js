$(function addResume(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.response != null) {
            $(".content").html(marked(xmlhttp.response))
        }
    };
    xmlhttp.open("GET", "data/posts/resume.md", true);
    xmlhttp.send();
});

