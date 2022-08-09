Algoritmo "04_soma%5_para"
// 4)Elabore um algoritmo que leia 10 números e mostre a soma dos
// números divisíveis por 5.
Var
   c, n, soma: inteiro
Inicio
      para c de 1 ate 10 passo 1 faca
           escreval ("Digite um número: ")
           leia (n)
              
           se (n % 5 = 0) entao
              soma <- soma + n
           fimse
      fimpara
      escreval ("A soma dos números divisiveis por 5 é: ", soma)
Fimalgoritmo