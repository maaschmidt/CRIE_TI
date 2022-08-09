Algoritmo "intervalo_Impar"
Var
   n1, n2, aux: inteiro
Inicio
      escreval ("Digite o 1º número: ")
      leia (n1)
      escreval ("Digite o 2º número: ")
      leia (n2)

      enquanto (n1 <= n2) faca
              se (n2 % 2 = 1) entao
                 escreva (n2, "..")
              fimse
              n2 <- n2 - 1
      fimenquanto

      enquanto (n1 >= n2) faca
              se (n1 % 2 = 1) entao
                 escreva (n1, "..")
              fimse
              n1 <- n1 - 1
      fimenquanto
Fimalgoritmo