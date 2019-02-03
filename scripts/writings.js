$(this.setContent = function () {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        console.log(xmlhttp.responseText);
    };
    xmlhttp.open("GET", "data/posts/test.md", true);
    xmlhttp.send();
});