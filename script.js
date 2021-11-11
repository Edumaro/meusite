
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
    if(meuSrc === 'images/xina.png') {
      xina.setAttribute ('src','images/picolas.png');
    } else {
      xina.setAttribute ('src','images/xina.png');
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
  let radar = document.querySelector('.radar');

  function funnyNot() {
    radar.removeAttribute("style")
  }
  let contratad = document.querySelector('.contratado')
  function contratado() {
    contratad.removeAttribute("style")
  }
  let blocked = document.querySelector('.blocked')
   function banido(){
     blocked.removeAttribute("style")
   }
   let button = document.querySelector('.banido')

   function unhidden() {
     button.removeAttribute("hidden")
   }

  