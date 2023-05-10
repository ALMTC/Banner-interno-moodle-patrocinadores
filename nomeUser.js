document.addEventListener("DOMContentLoaded", function() {
    let list = document.getElementsByClassName("logininfo");
    document.getElementById("nomeUser").innerHTML = list[0].getElementsByTagName('a')[0].innerHTML;
});

//Adicionar <span id="nomeUser"></span>!</div> no local onde deve aparecer