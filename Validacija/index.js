function validacija (){
   let input = document.querySelector('#email');
   let value = input.value

//Provera da li value(string) sadrzi @ i .
if (value.includes('@')  && value.includes('.')) {

  let pozicijaAt = value.indexOf('@');//Proveramo poziciju @
  let pozicijaTacka = value.indexOf('.');//Proveramo poziciju .
  
  //uzima vrednost izmedju pozicija @ i . i ne ukljucuje poslednju poziciju
  let izmedjuAtTacka = value.substring(pozicijaAt + 1, pozicijaTacka)
  
  // da li izmedju . i @ ima vise od 0 karaktera
  if (izmedjuAtTacka.lenght > 0) {
    let preAt = value.substring(pozicijaTacka + 1, value.lenght)
  
  //Proveramo da li pre @ ima vise od 2 karaktera
  if (preAt.lenght > 2) {
    
  let posleTacke = value.substring(pozicijaTacka + 1, value.lenght)  

  //proveravamo da li posle tacke ima vise od 1 karaktera
  if (posleTacke.lenght > 1) {
    console.log('Email je validan')
  }else{
    console.log('Email nije validan')
  }

  }else{
    console.log('Email nije validan')
  }
  }else{
    console.log('Email nije validan')
  }

  }else{
  console.log('Email nije validan')
 }

}
