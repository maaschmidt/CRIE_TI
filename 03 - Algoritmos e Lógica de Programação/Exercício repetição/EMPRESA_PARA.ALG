Algoritmo "empresa_para"
// Uma empresa fez uma pesquisa com 10 pessoas para saber a aceita��o de
// um produto lan�ado no mercado, para isso devemos ler o sexo e a resposta de
// cada pessoa pesquisada.

// No final informar:
// a. Quantas pessoas responderam SIM.
// b. Quantas pessoas responderam N�O.
// c. Quantas pessoas do sexo feminino disseram SIM.
// d. Quantas pessoas do sexo masculino disseram N�O.
// e. Quantas foram as pessoas pesquisadas.
Var
   c, sfs, smn, yes, no, t: inteiro
   r, s: caracter
Inicio
      escreva ("Quantas pessoas v�o participar da pesquisa?")
      leia (t)
      para c de 1 ate t passo 1 faca
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
      fimpara
      limpatela
      escreval (yes, " pessoa(s) respondeu(ram) SIM.")
      escreval (no, " pessoa(s) respondeu(ram) N�O.")
      escreval (sfs, " pessoa(s) do sexo feminino respondeu(ram) SIM.")
      escreval (smn, " pessoa(s) do sexo masculino respondeu(ram) N�O.")
      escreval (t, " pessoa(s) respondeu(ram) ao question�rio")
Fimalgoritmo