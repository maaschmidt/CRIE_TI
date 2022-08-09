Algoritmo "intervalo_par"
// 4)Elabore um algoritmo que leia 10 números e mostre a soma dos
// números divisíveis por 5.
Var
   n1, n2, aux: inteiro
Inicio
      escreval ("Digite o 1º número: ")
      leia (n1)
      escreval ("Digite o 2º número: ")
      leia (n2)
      se (n1 > n2) entao
        aux <- n2
        n2 <- n1
        n1 <- aux
      fimse
      enquanto (n1 < n2) faca
              n1 <- n1 + 1
              se (n1 % 2 =0) entao
                 escreva (n1, "..")
              fimse
      fimenquanto
Fimalgoritmo