Algoritmo "soma%5_repita"
// 4)Elabore um algoritmo que leia 10 números e mostre a soma dos
// números divisíveis por 5.
Var
   c, n, soma: inteiro
Inicio
      repita
            escreval ("Digite um número: ")
            leia (n)
              
            se (n % 5 = 0) entao
               soma <- soma + n
            fimse
            c <- c + 1
      ate c = 10
      escreval ("A soma dos números divisiveis por 5 é: ", soma)
Fimalgoritmo