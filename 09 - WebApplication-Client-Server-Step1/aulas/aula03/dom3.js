var links = [];

links.push("https://www.g1.com.br");
links.push("https://www.mercadolivre.com.br");
links.push("https://www.netflix.com.br");
links.push("https://www.amazon.com.br");

console.log(links);
var body = document.querySelector('body');
console.log(body);

for (var i = 0; i < links.length; i++) {
    var link = links[i];
    var a = document.createElement('a');
    a.href = link;
    a.innerHTML = link;

    body.appendChild(a);
    body.appendChild(document.createElement('br'))
}