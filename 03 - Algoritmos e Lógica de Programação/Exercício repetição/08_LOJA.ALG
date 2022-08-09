Algoritmo "08_loja"
Var
   c: inteiro
   v, totalv, totalp, total, pp: real
   p: caracter
Inicio
      para c de 1 ate 15 passo 1 faca
           escreva ("VALOR: R$")
           leia (v)
           escreva ("Pagamento à vista(v) ou a prazo(p): ")
           leia (p)
           
           se (p = "v") ou (p = "V") entao
              totalv <- totalv + v)
           senao
                se (p = "p") ou (p = "P") entao
                   totalp <- totalp + v)
                   pp <- pp + (v /3)
                fimse
           fimse
           total <- total + v
      fimpara

      limpatela
      escreval ("Valor das compras à vista: R$", totalv)
      escreval ("Valor das compras a prazo: R$", totalp)
      escreval ("Valor das compras efetuadas: R$", total)
      escreval ("Soma da primeira parcela das comrpas a prazo: R$", pp)


Fimalgoritmo