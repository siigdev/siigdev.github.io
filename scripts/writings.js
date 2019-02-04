function App() {
    this.setContent = function () {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.responseType = 'json';
        xmlhttp.onreadystatechange = function () {
            if (this.response != null) {
                for (var i in this.response.posts) {
                    let response = this.response.posts[i]
                    var html = '<div class="writing"><h1>' + response.title + '</h1><div class="date">' + response.date + '</div>'
                    $(html).appendTo("#posts").one("click", function () {
                        getContent(response.src);
                    });
                }
            }
        };
        xmlhttp.open("GET", "data/posts/config.json", true);
        xmlhttp.send();
    };
    this.getContent = function (src) {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.response != null) {
                $(".content").html(marked(this.response))
            }
        }
        xmlhttp.open("GET", "data/posts/"+ src, true);
        xmlhttp.send();
    };
    this.setContent();

}
App();