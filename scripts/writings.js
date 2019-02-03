$(this.setContent = function () {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.responseType = 'json';
    xmlhttp.onreadystatechange = function () {
        if (this.response != null) {
            console.log(this.response.posts);
        }
    };
    xmlhttp.open("GET", "data/posts/config.json", true);
    xmlhttp.send();
});