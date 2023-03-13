/*ANOTACOES:

callback
function principal(arg){
    console.log(`O resultado é ${arg}`);
}

function callback(a, b, callback){
    let op = a+b;
    callback(op);
}
callback(5, 6, principal);


 OUTRO
function exibirMensagem(arg){
    console.log(`Resultado: ${arg}`);
}

async function dadosApi(api, callback){
    const resultados = await fetch(api);
    const dados = await resultados.json();
    callback(dados.value);
}
dadosApi('https://api.chucknorris.io/jokes/random', exibirMensagem);


ex1
function idade(idd){

    idd = 18;
    if(idd >= 18){
        console.log("Voce é maior de idade");       
    }
    else{
        console.log("Voce é menor de idade");
    }
    idade(18;)
}


ex2 
function PalavrasComLetra(strings, letra){
    const PalavrasComLetra = [];
  
    for(let i = 0; i < strings.length; i++){
      if(strings[i].toLowerCase === letra){
        PalavrasComLetra.push(strings[i]);
      }
      return `A letra ${letra} aparece ${PalavrasComLetra.length} vezes`
    }
}
    console.log(PalavrasComLetra("banana banana", "a"));
    
    
    ex3 soma e mult com callback

    exibir = (arg) => {
        console.log(`O resutado da op é ${arg}`);
    }
    soma = (a, b, callback) => {
        let op = a + b;
        callback(op);
    }
    mult = (a, b, callback) => {
        let op = a * b;
        callback(op);
    }
    soma(4, 4, exibir);
    mult(4, 4, exibir);
    */