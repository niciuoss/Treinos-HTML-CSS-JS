function contar(){
  let inicio = document.getElementById('init');
  let fim = document.getElementById('end');
  let passo = document.getElementById('step');
  let res = document.getElementById('res');

  if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
    res.innerHTML = 'Impossível contar!';
    //window.alert('[ERROR] Dados Não Preenchidos');
  } else {
    res.innerHTML = 'Contando: ';
    let i = Number(inicio.value);
    let f = Number(fim.value);
    let p = Number(passo.value);
    if( p <= 0){
      window.alert('Passo inválido! Irá ser considerado o passo = 1');
      p = 1; 
    }
    if( i < f){
      //contagem crescente
      for(let c = i; c <= f; c += p){
        res.innerHTML += ` ${c}\u{1F449}`;
      }
      res.innerHTML += ` \u{1F3C1} `;
    } else {
      //contagem decrescente
      for( let c = i; c>= f; c -= p){
        res.innerHTML += ` ${c}\u{1F449}`;
      } 
    }
    res.innerHTML += ` \u{1F3C1} `;
  }

}