const FLAGS = { novoBanner: false };
 
const menu = ["Início", "Produtos", "Contato"];
 
function mostrarMenu() {
  const ul = document.getElementById("menu");
  menu.forEach(item => {
    ul.innerHTML += "<li>" + item + "</li>";
  });
}
 
mostrarMenu();
 