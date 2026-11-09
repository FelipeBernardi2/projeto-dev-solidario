// Número de telefone
var NUMERO = "5544997585153";

// Formulário: junta nome + mensagem e abre o WhatsApp
document.getElementById("form-orc").addEventListener("submit", function (e) {
  e.preventDefault();
  var nome = this.nome.value.trim();
  var msg = this.mensagem.value.trim();
  var texto = "Olá! Vim pelo site e gostaria de um orçamento.\n\nNome: " + nome + "\nO que preciso: " + msg;
  window.open("https://wa.me/" + NUMERO + "?text=" + encodeURIComponent(texto), "_blank");
});


// Menu: abre e fecha pelo botão hambúrguer
var menu = document.getElementById("menu-toggle");
var hamb = document.querySelector(".hamb");
var painel = document.querySelector(".painel");

hamb.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();

    menu.checked = !menu.checked;
});

// Menu: fecha ao clicar fora dele
document.addEventListener("click", function (e) {
    if (
        menu.checked &&
        !painel.contains(e.target) &&
        !hamb.contains(e.target)
    ) {
        menu.checked = false;
    }
});

// Menu: fecha ao clicar em um link
document.querySelectorAll(".painel a").forEach(function (link) {
    link.addEventListener("click", function () {
        menu.checked = false;
    });
});