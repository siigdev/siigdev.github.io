$(this.setContent = function () {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.responseType = 'json';
    xmlhttp.onreadystatechange = function () {
        if (this.response != null) {
            for(var i in this.response.posts){
                var html = '<div class="post">' + this.response.posts[i].title + '</div>'
                $(html).appendTo("#posts");
                console.log(marked('# Marked in the browser\n\nRendered by **marked**.'));
        }
            
        }
    };
    xmlhttp.open("GET", "data/posts/config.json", true);
    xmlhttp.send();
});