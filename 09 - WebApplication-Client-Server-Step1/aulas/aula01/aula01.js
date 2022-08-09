    /*alert('Hello World!')
       confirm('confirm')
       prompt("pergunta")
       console.log('Hello World!2')*/

       /*var nome = "Marcel"
       var money = 13.03
       var okay = true
       var numeroA = 10.00
       var numeroB = '10.00'
       var soma = numeroA + Number.parseInt(numeroB)
       var A = numeroA == numeroB // true
       var B = numeroA === numeroB // false*/
    
       var nome = prompt("Qual seu nome?")
       alert('Olá, ' +nome)
       var idade = prompt("Qual sua idade?")
       var result = idade >= 18 ? 'MAIOR' : 'MENOR'
       alert(nome+','+' você é '+result+' de idade')
       /*if (idade >= 18){
           alert(nome+','+' você é MAIOR de idade')
       }
       else if (idade < 18) {
           alert(nome+','+' você é MENOR de idade')
       }*/