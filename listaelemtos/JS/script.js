function agregarelemento(){
    console.log("hola");
    var micajatexto = document.getElementById("asdf");
    var ul = document.getElementById("miul");

    var li =document.createElement("li");
    var texto_li = document.createTextNode(micajatexto.value);

    li.appendChild(texto_li);
    ul.appendChild(li);
}