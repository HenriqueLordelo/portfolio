/*ANIMAÇÃO*/
if (window.SimpleAnime) {
  new SimpleAnime();
}

/*MENU HAMBÚRGUER - MOBILE*/
const btnMobile = document.getElementById("btn-mobile");
const nav = document.getElementById("nav");
const linkss = nav.querySelectorAll(".header-menu a");

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
  const active = nav.classList.contains("active");
  event.currentTarget.setAttribute("aria-expanded", active);
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

function closeMenuOnClick() {
  nav.classList.remove("active");
  btnMobile.setAttribute("aria-expanded", "false");
}

linkss.forEach((link) => {
  link.addEventListener("click", closeMenuOnClick);
});

/*EFEITO HOVER NA PARTE DE PROJETOS*/
function setupImageTransition(projectSelectors) {
  const projetos = document.querySelectorAll(projectSelectors);

  projetos.forEach((projeto) => {
    const imagem = projeto.querySelector(".desenvolvimentos-imagens-projetos");
    const video = document.createElement("video");
    video.className = "desenvolvimentos-video";
    video.loop = true;
    video.muted = true;

    const source = document.createElement("source");
    // source.src = "/path-to-your-video.mp4";
    source.type = "video/mp4";

    video.appendChild(source);
    projeto.appendChild(video);

    projeto.addEventListener("mouseenter", () => {
      projeto.classList.add("show-video");
    });

    projeto.addEventListener("mouseleave", () => {
      projeto.classList.remove("show-video");
    });
  });
}
setupImageTransition(
  ".bikcraft-imagem",
  ".portfolio-imagem",
  ".elisa-imagem",
  ".guilherme-imagem"
);

/*EFEITO DE MOVIMENTO AO PASSAR O MOUSE NOS CÍRCULOS*/
const sobreMimSection = document.querySelector(".minha-foto-e-competencias");
const circulos = sobreMimSection.querySelectorAll(".circulo");

function atualizarPosicaoCirculos(event) {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  circulos.forEach((circulo, index) => {
    const moveX = (mouseX - circulo.clientWidth / 2) / -20;
    const moveY = (mouseY - circulo.clientHeight / 2) / -20;

    circulo.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });
}
function restaurarPosicaoCirculos() {
  circulos.forEach((circulo) => {
    circulo.style.transform = "translate(0, 0)";
  });
}
sobreMimSection.addEventListener("mousemove", atualizarPosicaoCirculos);

sobreMimSection.addEventListener("mouseout", () => {
  circulos.forEach((circulo) => {
    circulo.style.transition = "transform 0.4s ease";
    circulo.style.transform = "translate(0, 0)";
  });
});
