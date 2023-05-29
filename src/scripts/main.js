document.addEventListener('DOMContentLoaded', function() {
    
    const hamburgerIcon = document.getElementById("hamburger");

    const buttons = document.querySelectorAll('[data-tab-button]');
    const accordionButton = document.querySelector('[data-accordion]');
    let slidesFoto = document.getElementById("fotos");
    const slidesContainer = document.getElementById("slider-container");
    const prevButton = document.getElementById("slide-arrow-prev");
    const nextButton = document.getElementById("slide-arrow-next");
    let slideAtual = 1;

    const botoesVideogame = document.querySelectorAll('.videogames');
    const textosVideogame = document.querySelectorAll('.textos-videogames');
    const linksVideogame = document.querySelectorAll('.links-videogames');

    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    accordionButton.addEventListener('click', abreOuFechaAccordion);

    hamburgerIcon.addEventListener('mouseover', hoverHamburger);
    hamburgerIcon.addEventListener('mouseleave', defaultHamburger);
    hamburgerIcon.addEventListener('click', menuHamburger);

    prevButton.addEventListener("click", () => {
        var window_width = window.innerWidth;
        let slideWidth = 0;
        console.log(slideAtual, ' previous');
        if (window_width > 1500) {
            slideWidth = slidesContainer.offsetWidth/3.1;
        }
        else if (window_width > 1050) {
            slideWidth = slidesContainer.offsetWidth/3;
        }
        else if (window_width > 800) {
            slideWidth = slidesContainer.offsetWidth/2.15;
        }
        else if (window_width > 750) {
            slideWidth = slidesContainer.offsetWidth/1.1;
        }
        else if (window_width > 600) {
            slideWidth = slidesContainer.offsetWidth/0.990;
        }
        else {
            slideWidth = slidesContainer.offsetWidth;
        }
        if (window_width > 1050)
        {
            if (slideAtual > 3) {
            }
            else if (slideAtual > 2) {
                slidesContainer.scrollLeft += slideWidth;
                prevButton.classList.remove('elenco__container__list__item--button__button--activated');
                prevButton.classList.add('elenco__container__list__item--button__button--deactivated');
                nextButton.classList.add('elenco__container__list__item--button__button--activated');
                nextButton.classList.remove('elenco__container__list__item--button__button--deactivated');
                slideAtual++;
            }
            else {
                slidesContainer.scrollLeft += slideWidth;
                nextButton.classList.add('elenco__container__list__item--button__button--activated');
                nextButton.classList.remove('elenco__container__list__item--button__button--deactivated');
                slideAtual++;
            }
        }
        else if (window_width > 800) {
            if (slideAtual > 4) {
            }
            else if (slideAtual > 3) {
                slidesContainer.scrollLeft += slideWidth;
                prevButton.classList.remove('elenco__container__list__item--button__button--activated');
                prevButton.classList.add('elenco__container__list__item--button__button--deactivated');
                nextButton.classList.add('elenco__container__list__item--button__button--activated');
                nextButton.classList.remove('elenco__container__list__item--button__button--deactivated');
                slideAtual++;
            }
            else {
                slidesContainer.scrollLeft += slideWidth;
                nextButton.classList.add('elenco__container__list__item--button__button--activated');
                nextButton.classList.remove('elenco__container__list__item--button__button--deactivated');
                slideAtual++;
            }
        }
        else {
            if (slideAtual > 5) {
            }
            else if (slideAtual > 4) {
                slidesContainer.scrollLeft += slideWidth;
                prevButton.classList.remove('elenco__container__list__item--button__button--activated');
                prevButton.classList.add('elenco__container__list__item--button__button--deactivated');
                nextButton.classList.add('elenco__container__list__item--button__button--activated');
                nextButton.classList.remove('elenco__container__list__item--button__button--deactivated');
                slideAtual++;
            }
            else {
                slidesContainer.scrollLeft += slideWidth;
                nextButton.classList.add('elenco__container__list__item--button__button--activated');
                nextButton.classList.remove('elenco__container__list__item--button__button--deactivated');
                slideAtual++;
            }
        }
        
    });

    nextButton.addEventListener("click", () => {
        var window_width = window.innerWidth;
        let slideWidth = 0;
        console.log(slideAtual, ' next');
        if (window_width > 1500) {
            slideWidth = slidesContainer.offsetWidth/3.1;
        }
        else if (window_width > 1050) {
            slideWidth = slidesContainer.offsetWidth/3;
        }
        else if (window_width > 800) {
            slideWidth = slidesContainer.offsetWidth/2.15;
        }
        else if (window_width > 750) {
            slideWidth = slidesContainer.offsetWidth/1.1;
        }
        else if (window_width > 600) {
            slideWidth = slidesContainer.offsetWidth/0.990;
        }
        else {
            slideWidth = slidesContainer.offsetWidth;
        }

        if (slideAtual < 2) {
        }
        else if (slideAtual < 3) {
            slidesContainer.scrollLeft -= slideWidth;
            nextButton.classList.remove('elenco__container__list__item--button__button--activated');
            nextButton.classList.add('elenco__container__list__item--button__button--deactivated');
            prevButton.classList.add('elenco__container__list__item--button__button--activated');
            prevButton.classList.remove('elenco__container__list__item--button__button--deactivated');
            slideAtual--;
        }
        else {
            slidesContainer.scrollLeft -= slideWidth;
            prevButton.classList.add('elenco__container__list__item--button__button--activated');
            prevButton.classList.remove('elenco__container__list__item--button__button--deactivated');
            slideAtual--;
        }
    });

    window.addEventListener('scroll', function() {
        const scrollJanela = window.scrollY;
        if (scrollJanela <= alturaHero) {
            ocultaLinhaHeader();
        }
        else {
            exibeLinhaHeader();
        }
    })

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);

            escondeAbas();
            aba.classList.add('series__container__list--is-active');

            removeBotaoAtivo();
            buttons[i].classList.add('title--series--selected');
            buttons[i].classList.remove('title--series--not-selected');
        })
    }

    for (let i = 0; i < botoesVideogame.length; i++) {
        botoesVideogame[i].addEventListener('mouseover', function(botao) {
            let pai = botao.target.parentElement;

            const botaoAlvo = botao.target;
            imagemAlvo = botaoAlvo.src;
            index = imagemAlvo.lastIndexOf("/");
            filename = imagemAlvo;
            if(index !== -1) {     
                filename = imagemAlvo.substring(index+1,(imagemAlvo.length-4));
            }
            imagemAlvo = `./../../dist/images/jogos/${filename}-orange.png`;
            botaoAlvo.src = imagemAlvo;

            let objeto = "";
            if (pai.hasChildNodes()) {
                let children = pai.childNodes;
                objeto = children[3];
            }
            objeto.classList.add('jogos__container__list__menu__item__title--hoverizou');
        })
        botoesVideogame[i].addEventListener('mouseleave', function(botao) {
            let pai = botao.target.parentElement;

            const botaoAlvo = botao.target;
            imagemAlvo = botaoAlvo.src;
            index = imagemAlvo.lastIndexOf("/");
            filename = imagemAlvo;
            if(index !== -1) {     
                filename = imagemAlvo.substring(index+1,(imagemAlvo.length-11));
            }
            imagemAlvo = `./../../dist/images/jogos/${filename}.png`;
            botaoAlvo.src = imagemAlvo;

            let objeto = "";
            if (pai.hasChildNodes()) {
                let children = pai.childNodes;
                objeto = children[3];
            }
            objeto.classList.remove('jogos__container__list__menu__item__title--hoverizou');
        })
    }

    
    for (let i = 0; i < textosVideogame.length; i++) {
        textosVideogame[i].addEventListener('mouseover', function(botao) {
            const botaoAlvo = botao.target;
            let pai = botaoAlvo.parentElement;
            let objeto = "";
            let objeto2 = "";
            if (pai.hasChildNodes()) {
                let children = pai.childNodes;
                objeto = children[1];
                objeto2 = children[3];
            }
            imagemAlvo = objeto.src;
            index = imagemAlvo.lastIndexOf("/");
            filename = imagemAlvo;
            if(index !== -1) {     
                filename = imagemAlvo.substring(index+1,(imagemAlvo.length-4));
            }
            imagemAlvo = `./../../dist/images/jogos/${filename}-orange.png`;
            objeto.src = imagemAlvo;
            objeto2.classList.add('jogos__container__list__menu__item__title--hoverizou');
        })
        textosVideogame[i].addEventListener('mouseleave', function(botao) {
            const botaoAlvo = botao.target;
            pai = botaoAlvo.parentElement;
            let objeto = "";
            let objeto2 = "";
            if (pai.hasChildNodes()) {
                let children = pai.childNodes;
                objeto = children[1];
                objeto2 = children[3];
            }
            imagemAlvo = objeto.src;
            index = imagemAlvo.lastIndexOf("/");
            filename = imagemAlvo;
            if(index !== -1) {     
                filename = imagemAlvo.substring(index+1,(imagemAlvo.length-11));
            }
            imagemAlvo = `./../../dist/images/jogos/${filename}.png`;
            objeto.src = imagemAlvo;
            objeto2.classList.remove('jogos__container__list__menu__item__title--hoverizou');
        })
    }   

})

function hoverHamburger(elemento) {
    const hamburger = elemento.target;
    imagemAlvo = hamburger.src;
    index = imagemAlvo.lastIndexOf("/");
    filename = imagemAlvo;
    if(index !== -1) {     
        filename = imagemAlvo.substring(index+1,(imagemAlvo.length-4));
    }
    imagemAlvo = `./../../dist/images/${filename}-hover.png`;
    elemento.target.src = imagemAlvo;
}

function defaultHamburger(elemento) {
    const hamburger = elemento.target;
    imagemAlvo = hamburger.src;
    index = imagemAlvo.lastIndexOf("/");
    filename = imagemAlvo;
    if(index !== -1) {     
        filename = imagemAlvo.substring(index+1,(imagemAlvo.length-10));
    }
    imagemAlvo = `./../../dist/images/${filename}.png`;
    elemento.target.src = imagemAlvo;
}

function menuHamburger() {
    const menuSuspenso = document.getElementById("menu-suspenso");
    classe = "header__menu-suspenso--is-open"
    menuSuspenso.classList.toggle(classe);
}

function ocultaLinhaHeader(elemento) {
    const header = document.querySelector('.header__menu-principal')
    header.classList.add('header__menu-principal--is-hidden')
    header.classList.remove('header__menu-principal--is-shown')
}

function exibeLinhaHeader(elemento) {
    const header = document.querySelector('.header__menu-principal')
    header.classList.remove('header__menu-principal--is-hidden')
    header.classList.add('header__menu-principal--is-shown')
}

function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('title--series--selected');
        buttons[i].classList.add('title--series--not-selected');
    }
}

function escondeAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
            tabsContainer[i].classList.remove('series__container__list--is-active')
    }
}

function testar(a) {
    let frase = 'Mais Dispositivos';
    return (a == frase ? 'Recolher' : frase);
}

function abreOuFechaAccordion(botao) {
    const classe = 'accordion-group--is-open';
    const classe2 = 'jogos__container__list__accordion--is-open';


    const accordionSection = document.getElementById("accordion-section");
    const accordionButton = document.querySelector('[data-accordion]');
    const accordionText = document.querySelector('[text-accordion]');
    const accordionTextHTML = accordionText.innerHTML;
    
    accordionSection.classList.toggle(classe);
    accordionButton.classList.toggle(classe2);
    accordionText.innerHTML = testar(accordionTextHTML);
}