function adicionaCarosel() {

  var HTMLString ='<section id="slider-section"><div class="container"><div class="subcontainer"><div class="slider-wrapper"><h2>Patrocinadores</h2><div class="slider"></div></div></div></div></section>';

  var div = document.createElement("div");
  div.innerHTML = HTMLString;

  let elemento = document.getElementById('topofscroll');
  
  elemento.after(div);

  adicionaImg();

}

function adicionaScripts() {
    //essa função adiciona os css e javascript adicionais na págian
  
    //Seleciona o elemento head da página
    var head = document.getElementsByTagName("HEAD")[0];
  
    //cria o link para o css adicional da própria página
    var linkC = document.createElement("link");
  
    linkC.rel = "stylesheet";
    linkC.type = "text/css";
    //altere para o link da página
    linkC.href = "/carrosel.css";
    //linkC.href = "https://eadteste.idear.org.br/pluginfile.php/8491/mod_resource/content/1/carrosel.css";
  
    //cria o link para o css adicional do Tiny Slider
    var linkTN = document.createElement("link");
  
    linkTN.rel = "stylesheet";
    linkTN.type = "text/css";
    linkTN.href =
      "https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/tiny-slider.css";
  
    //cria o link para o js adicional do Tiny Slider
    var scriptTN = document.createElement("script");
  
    scriptTN.src =
      "https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/min/tiny-slider.js";
  
    head.appendChild(linkC);
    head.appendChild(linkTN);
    head.appendChild(scriptTN);
  
    document.addEventListener("DOMContentLoaded", adicionaCarosel());
}

function adicionaImg(){
    const slider = document.querySelector(".slider")
    const logoObj = [
      {
        "img" : "http://placekitten.com/g/1280/720"
      },
      {
        "img" : "http://placekitten.com/1280/720"
      },
      {
        "img" : "http://placekitten.com/g/1280/720"
      },
      {
        "img" : "http://placekitten.com/1280/720"
      }
    ]

    let logos = "";
    for(let logo in logoObj){
      logos += '<div class="slide"><img src="'+ logoObj[logo].img +'" alt="logo"></div>';
    }

    slider.innerHTML = logos;

    geraslider();


}

function geraslider(){
    const slider = tns({
        container : ".slider",
        gutter : 20,
        "slideBy" : "1",
        "speed" : 400,
        "nav" : false,
        autoplay : true,
        controls : false,
        autoplayButtonOutput : false,
        responsive: {
            1600:{
                items : 4,
            },
            1024: {
                items : 3,
            },
            768: {
                items : 2,
            },
            480: {
                items : 1,
            }
        }
    })
}


//# sourceMappingURL=../sourcemaps/tiny-slider.js.map

adicionaScripts();