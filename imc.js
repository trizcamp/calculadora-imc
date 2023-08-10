//pegar elementos nos seus respectivos ids
const calcular = document.getElementById('calcular');


//acessar elementos
//nome.value ='beatriz'

const imc = () => {
    let nome = document.getElementById('nome').value;
    let altura = document.getElementById('altura').value;
    let peso = document.getElementById( 'peso').value;
    let result = document.getElementById('resultado');

    if (nome  !== '' && altura  !== '' && peso !== ''){
       const valorIMC = (peso/(altura **2)).toFixed(1);

       let classificação = ""
       if(valorIMC < 18.5 ){
            classificação = 'abaixo do peso'
       }else if (valorIMC < 25){
            classificação = 'com peso ideal. Parabéns'
       }else if (valorIMC <= 30){
            classificação = 'levemente acima do peso'
       }else if (valorIMC < 35){
            classificação = 'com obesidade grau 1'
       }else if (valorIMC < 40 ){
            classificação = 'obesidade grau 2'
       }else{
            classificação = 'obesidade morbida. Procure um médico!'
       }
        result.textContent = `${nome} seu IMC é ${valorIMC } e você está ${classificação}`
    }else{
        //adiciona o conteudo ao html
       result.textContent = 'preencha todos os campos!!'
    }


}

//qnd alguem clicar no botão calcular vai executar uma função
calcular.addEventListener('click',imc) 

