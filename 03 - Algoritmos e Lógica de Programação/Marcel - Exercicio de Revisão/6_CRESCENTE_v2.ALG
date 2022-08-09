Algoritmo "6_crescente_v2"
Var
   n1, n2, n3, aux: inteiro
Inicio
      escreva ("1º número: ")
      leia (n1)
      escreva ("2º número: ")
      leia (n2)
      escreva ("3º número: ")
      leia (n3)
      
      limpatela
      se (n2 < n1) entao
        aux <- n1
        n1 <- n2
        n2 <- aux
      fimse
      se (n3 < n1) entao
         aux <- n1
         n1 <- n3
         n3 <- aux
      fimse
      se (n3 < n2) entao
        aux <- n2
        n2 <- n3
        n3 <- aux
      fimse
      
      escreval (n1, "..", n2, "..", n3, "..")
Fimalgoritmo