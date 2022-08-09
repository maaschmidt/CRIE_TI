Algoritmo "03_analise_votos"
Var
   total, b, n, v: real
Inicio
      escreva ("Quantos votos foram computados? ")
      leia (total)
      escreva ("Destes, quantos são brancos? ")
      leia (b)
      escreva ("Qunatos são nulos? ")
      leia (n)
      escreva ("E válidos? ")
      leia (v)

      b <- (b * 100)/ total
      n <- (n * 100)/ total
      v <- (v * 100)/ total
      
      limpatela
      escreval (b, "% são BRANCOS")
      escreval (n, "% são NULOS")
      escreval (v, "% são VÁLIDOS")
Fimalgoritmo