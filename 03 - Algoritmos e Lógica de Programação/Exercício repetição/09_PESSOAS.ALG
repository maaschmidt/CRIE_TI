Algoritmo "09_pessoas"
Var
   c, i, mais50: inteiro
   a, m, contm, medaltura, pormassa: real
Inicio
      para c de 1 ate 5 passo 1 faca
          escreva ("Qual sua idade? ")
          leia (i)
          escreva ("Qual sua altura? ")
          leia (a)
          se (a > 5) entao
             escreva ("Digite sua altura em metros!")
             leia (a)
          fimse
          escreva ("Qual sua massa? ")
          leia (m)

          se (i > 50) entao
             mais50 <- mais50 + 1
          fimse
          se (i > 10) e (i < 20) entao
            contm <- contm + 1
            medaltura <- medaltura + a
          fimse
          se (m < 40) entao
            pormassa <- pormassa + 1
          fimse
          limpatela
      fimpara
      
      medaltura <- medaltura/contm
      pormassa <- (pormassa * 100)/5
      
      escreval (mais50, " pessoas tem mais de 50 anos")
      escreval (medaltura:5:2, " é a média da altura das pessoas entre 10 e 20 anos")
      escreval (pormassa, "% das pessoas analisadas tem menos de 40kg")

Fimalgoritmo