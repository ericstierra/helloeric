var username = 'erictierra';
var token = '235d89d283b13730bd1168c47f26155da018032ac83d69edc68a5c7fdc55042cf';
var count = 2;

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@" + username, true);
xhr.onload = function() {
    if (this.status === 200) {
        var data = JSON.parse(this.responseText);
        if (data.items.length > 0) {
            for (var i = 0; i < count; i++) {
                var post = data.items[i];
                var title = post.title;
                var image = post.thumbnail;
                var content = post.content;
                var first25Words = content.split(" ").slice(0, 25).join(" ") + "...";

                document.querySelectorAll('.left-image img')[i].src = image;
                document.querySelectorAll('h4')[i].innerHTML = title;
                document.querySelectorAll('p1')[i].innerHTML = first25Words;
                document.querySelectorAll('.white-button a')[i].href = post.link;
            }
        }
    } else {
        console.log('Unable to retrieve posts from Medium.');
    }
}
xhr.send();
