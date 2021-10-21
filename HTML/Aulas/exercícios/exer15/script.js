function verificar(){
  const data = new Date();
  const ano = data.getFullYear();
  const formAno = document.getElementById('txtano');
  const resultado = document.querySelector('div#res');

  if(formAno.value.length == 0 || Number(formAno.value) > ano){
    
    window.alert('[ERRO] Verifique os dados e tente novamente');
  
  }else {
    
    const formSex = document.getElementsByName('radsex');
    const idade = ano - Number(formAno.value);
    //resultado.innerHTML = `Idade calculada: ${idade}`;
    var genero = ''; //const não pode ser usado aqui, por isso usei o var/let
    const img = document.createElement('img');
    img.setAttribute('id', 'foto'); //essa linha e a de cima, são a mesma coisa que criar uma tag img com id 'foto' no HTML
    
    if(formSex[0].checked){//na posição 0 é Masculino, na posição 1 é feminino. Se o que tiver marcado for masculino
      genero = 'Homem';
      if(idade >= 0 && idade < 10){
        img.setAttribute('src', 'foto-bebe-m.png');
      } else if (idade < 21){
        img.setAttribute('src', 'foto-jovem-m.png');
      } else if (idade < 50){
        img.setAttribute('src', 'foto-adulto-m.png');
      } else{
        img.setAttribute('src', 'foto-idoso-m.png');
      }

    } else if (formSex[1].checked) {
      genero = 'Mulher';
      if(idade >= 0 && idade < 10){
        img.setAttribute('src', 'foto-bebe-f.png');
      } else if (idade < 21){
        img.setAttribute('src', 'foto-jovem-f.png');
      } else if (idade < 50){
        img.setAttribute('src', 'foto-adulto-f.png');
      } else{
        img.setAttribute('src', 'foto-idoso-f.png');
      }

    }
    resultado.style.textAlign = 'center';
    resultado.innerHTML = `Então você é ${genero} com idade igual a ${idade}`;
    resultado.appendChild(img);
  }
} 