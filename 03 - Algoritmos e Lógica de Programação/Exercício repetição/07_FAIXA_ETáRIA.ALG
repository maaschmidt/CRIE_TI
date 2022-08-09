Algoritmo "07_faixa_etária"
Var
   c, i, fe1, fe2, fe3, fe4, fe5, t: inteiro
   p1, p5: real
Inicio
      t <- 8
      para c de 1 ate t faca
          escreva ("Digite a idade da ", c,"ª pessoa: ")
          leia (i)
          se (i <= 15) entao
            fe1 <- fe1 + 1
          senao
               se (i > 15) e (i <= 30) entao
                  fe2 <- fe2 + 1
               senao
                    se (i > 31) e (i <= 45) entao
                       fe3 <- fe3 + 1
                    senao
                         se (i > 54) e (i <= 60) entao
                            fe4 <- fe4 + 1
                         senao
                              se (i > 60) entao
                                 fe5 <- fe5 + 1
                              fimse
                         fimse
                    fimse
               fimse
          fimse
      fimpara

      p1 <-(fe1 * 100)/t
      p5 <-(fe5 * 100)/t

      escreval ("Quantidade de pessoas até 15 anos:", fe1)
      escreval ("Quantidade de pessoas entre 16 e 30 anos:", fe2)
      escreval ("Quantidade de pessoas entre 31 e 45 anos:", fe3)
      escreval ("Quantidade de pessoas entre 46 e 60 anos:", fe4)
      escreval ("Quantidade de pessoas acima de 60 anos:", fe5)
      escreval ("Percentual primeira faixa etária:", p1,"%")
      escreval ("Percentual da última faixa etária:", p5,"%")

Fimalgoritmo