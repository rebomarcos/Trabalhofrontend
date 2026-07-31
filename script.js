//=================================
// SCRIPT DO SITE - MÚSICA BRASILEIRA
//=================================


//=================================
// BOTÃO VOLTAR AO TOPO
// Criado pelo JavaScript
//=================================

const botaoTopo = document.createElement("button");

botaoTopo.textContent = "↑";

botaoTopo.classList.add("botao-topo");

botaoTopo.setAttribute(
    "aria-label",
    "Voltar ao topo da página"
);

document.body.appendChild(botaoTopo);


// Mostrar e esconder botão

window.addEventListener("scroll", function(){

    if(window.scrollY > 300){

        botaoTopo.style.display = "block";

    }else{

        botaoTopo.style.display = "none";

    }

});


// Voltar ao topo

botaoTopo.addEventListener("click", function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});




//=================================
// MENU COM ROLAGEM SUAVE
//=================================

const linksMenu = document.querySelectorAll("nav a");


linksMenu.forEach(function(link){

    link.addEventListener("click", function(event){

        const destino = document.querySelector(
            link.getAttribute("href")
        );


        if(destino){

            event.preventDefault();


            destino.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});




//=================================
// ANIMAÇÃO DAS SEÇÕES AO APARECER
//=================================

const caixas = document.querySelectorAll(".caixa");


const observador = new IntersectionObserver(function(entries){

    entries.forEach(function(entry){

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

},
{
    threshold:0.2
});



caixas.forEach(function(caixa){

    caixa.style.opacity = "0";

    caixa.style.transform = "translateY(40px)";

    caixa.style.transition = "0.8s";


    observador.observe(caixa);

});




//=================================
// MENSAGEM NO CONSOLE
//=================================

console.log(
    "Site Música Brasileira carregado com sucesso!"
);