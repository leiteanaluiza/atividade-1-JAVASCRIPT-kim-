function atividade1(){
    var metros = prompt('Metros: ')
    var resultado = metros*100
    alert(metros+ ' metros é equivalente a ' +resultado+ 'cm')
}

function atividade2(){
    var lado= prompt('Lado: ')
    var area = lado * lado
    var dobro= area*2
    alert( 'a area do quadrado é: ')
       ( + area + '\n' +'o dobro da área desse quadrado é: ' +dobro)
}
 function atividade3 (){
    var  valorHora= prompt('Valor por hora R$: ')
    var horasTrabalhadas = prompt('Horas trabalhadas: ')
    var salario= (valorHora *horasTrabalhadas) *30
    alert('salario: ' +salario)

 }
  function atividade4 (){
    var grausF= prompt('Graus em Farenheit: ')
    var celsius=(5*(grausF-32)/9) 
    alert('Graus transformados em Celsius: '+ celsius)

  }
   function atividade5() {
    var num1 = Number(prompt('Primeiro Número inteiro: '));
    var num2 = Number(prompt('Segundo Número inteiro: '));
    var num3 = Number(prompt('Terceiro Número real: '));

    var produto = (num1 * 2) * (num2 / 2);
    var soma = (num1 * 3) + num3;
    var potencia = num3 ** 3; // num3^3

    alert(
        'O produto é: ' + produto + '\n' +
        'A soma é: ' + soma + '\n' +
        'A potência é: ' + potencia
    );
}
    function atividade6(){

      var altura= prompt('Digite sua altura:  ')
      var pesoIdeal= (72.7*altura) -58
      alert('Seu peso ideal é: '+pesoIdeal)
    }
    function atividade7(){
      
      var grausC= prompt('Digite graus em celsius: ')
      var CemF= (grausC *9/5) + 32 
      alert('Graus em fahenheit é: ' +CemF)
    }
    function atividade8(){

    var raiodocirculo= Number(prompt('Digite o raio do circulo: '))
    var area= Math.PI * (raiodocirculo * raiodocirculo)
    alert(' A área do circulo é: '+area)
    }
    function atividade9(){

    var nota1= Number(prompt('digite sua primeira nota: '))
    var nota2= Number(prompt('digite sua segunda nota: '))
    var nota3= Number(prompt('digite sua terceira nota: '))
    var nota4= Number(prompt('digite sua quarta nota: '))
    var media= (nota1+nota2+nota3+nota4)/4
    alert('Sua média é: '+media)
    }

    function atividade10(){
    
    var num1=Number(prompt('digite o primeiro número: '))
    var num2=Number(prompt('digite o segundo número: '))
    var soma= num1+num2
    alert('A soma dos números é: '+soma)
    }