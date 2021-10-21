function carregar(){

const msg = window.document.getElementById('msg');
const img = window.document.getElementById('img');

const data = new Date();
const hora = data.getHours();
//const hora = 13;

if(hora >= 6 && hora < 12){
  img.src = '/Aulas/Img/manhã.jpg';
  document.body.style.background = '#e2cd9f';
} else if (hora >= 12 && hora < 18){
  img.src = '/Aulas/Img/tarde.jpg';
  document.body.style.background = '#b9846f';
} else {
  img.src = '/Aulas/Img/noite.jpg';
  document.body.style.background = '#030344';
}

msg.innerHTML = `Agora são ${hora} horas`;

}

