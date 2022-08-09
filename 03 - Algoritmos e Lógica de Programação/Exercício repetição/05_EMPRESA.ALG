Algoritmo "empresa"
// Uma empresa fez uma pesquisa com 10 pessoas para saber a aceitação de
// um produto lançado no mercado, para isso devemos ler o sexo e a resposta de
// cada pessoa pesquisada.

// No final informar:
// a. Quantas pessoas responderam SIM.
// b. Quantas pessoas responderam NÃO.
// c. Quantas pessoas do sexo feminino disseram SIM.
// d. Quantas pessoas do sexo masculino disseram NÂO.
// e. Quantas foram as pessoas pesquisadas.
Var
   c, sfs, smn, yes, no, t: inteiro
   r, s: caracter
Inicio
      c <- 0
      sfs <- 0
      smn <- 0
      yes <- 0
      no <- 0
      escreva ("Quantas pessoas vão participar da pesquisa?")
      leia (t)
      enquanto (c < t) faca
               escreva ("Seu sexo (m/f): ")
               leia (s)
               escreva ("RESPOSTA (s/n): ")
               leia (r)

               se (r = "s") entao
                  yes <- yes + 1
               senao
                    se (r = "n") entao
                       no <- no + 1
                    fimse
               fimse

               se (s = "f") e (r = "s") entao
                  sfs <- sfs + 1
               senao
                    se (s = "m") e (r = "n") entao
                       smn <- smn + 1
                    fimse
               fimse
               
               c <- c + 1
      fimenquanto
      limpatela
      escreval (yes, " pessoa(s) respondeu(ram) SIM.")
      escreval (no, " pessoa(s) respondeu(ram) NÃO.")
      escreval (sfs, " pessoa(s) do sexo feminino respondeu(ram) SIM.")
      escreval (smn, " pessoa(s) do sexo masculino respondeu(ram) NÃO.")
      escreval (t, " pessoa(s) respondeu(ram) ao questionário")
Fimalgoritmo