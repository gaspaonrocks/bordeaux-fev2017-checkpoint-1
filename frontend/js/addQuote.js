window.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById("post");

    btn.onclick = postNewQuote;

});

function postNewQuote() {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                var quote = createQuote();
                alert("Thank you !");
                return quote;
            } else {
                alert('POST: Une erreur s’est produite.');
            }
        }
    };

    xhr.open('POST', 'http://localhost:3000/articles');
    var jsonQuote = JSON.stringify(quote);
    xhr.send(jsonQuote);

}

function createQuote() {
    var obj = {};
    obj.contributor = document.getElementById("firstName").value;
    obj.author = document.getElementById("author").value;
    obj.content = document.getElementById("quote").value;
    obj.chapter = document.getElementById("season").value;
    obj.episode = document.getElementById("episode").value;
    obj.image = document.getElementById("img").value;
    console.log(obj);
    return obj;
}