Algoritmo "04_bananas"
Var
   total: real
   banana: inteiro
Inicio
      escreva ("QUANTIDADE DE BANANAS: ")
      leia (banana)

      se (banana < 12) entao
         total <- banana * 2.5
      senao
           total <- banana * 2
      fimse

      escreva ("VALOR: R$", total)
Fimalgoritmo