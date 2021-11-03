
/*muda uma variavel
const bruh = document.querySelector('h2');
bruh.textContent = 'suave kkkkkk'
*/
/*LITERALMENTE FAZ PARECER UM VIRUS
document.querySelector('html').onclick = function() {
    alert('JOHN CHINA!');
}
*/
let xina = document.querySelector('.bet');

xina.onclick = function() {
    let meuSrc = xina.getAttribute('src');
    if(meuSrc === 'xina.png') {
      xina.setAttribute ('src','picolas.png');
    } else {
      xina.setAttribute ('src','xina.png');
    }
}
let meuBotao = document.querySelector('.chus');
let meuCabecalho = document.querySelector('h1');
function defineNomeUsuario() {
    let meuNome = prompt('Insira seu código de série:');
    if(!meuNome || meuNome === null) {
      defineNomeUsuario();
    } else {
      localStorage.setItem('nome', meuNome);
      meuCabecalho.innerHTML = 'Bem vindo plebeu ' + meuNome;
    }
  }
  if(!localStorage.getItem('nome')) {
    defineNomeUsuario();
  } else {
    let nomeGuardado = localStorage.getItem('nome');
    meuCabecalho.textContent = 'LGTV' + nomeGuardado;
  }
  meuBotao.onclick = function() { defineNomeUsuario();
  }
  let Jarvis = document.querySelector('.jar');

  function bruhMomento(e)  {
    console.log(e)
    console.log(Jarvis.getAttributeNames())
    Jarvis.removeAttribute("style")
  }
  var select = document.querySelector('.select');