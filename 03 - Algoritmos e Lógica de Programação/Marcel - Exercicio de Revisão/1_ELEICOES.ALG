Algoritmo "01_eleicoes"
Var
   i, ano, nasc, aniver: inteiro
   voto: caracter

Inicio
      escreva ("Em que ano estamos? ”_ _ _ _“ ")
      leia (ano)

      se (ano % 2 <> 0) entao
         escreval
         escreval ("Este ano não teremos eleições no Brasil, tente outro ano!")
      senao
           limpatela
           escreval ("+-------------------------+")
           escreval ("|       ELEIÇÕES",ano,"     |")
           escreval ("+-------------------------+")
           escreva ("Em que ano você nasceu? ”_ _ _ _“ ")
           leia (nasc)
      
           escreval ("Você ja fez ou fará aniversário até outubro? ")
           escreval ("Digite:")
           escreval ("1 para SIM")
           escreval ("2 para NÃO")
           leia (aniver)
      
           i <- ano - nasc
           se (aniver = 2) entao
              i <- i - 1
           fimse

           se (i < 16) entao
              escreva ("Você terá ", i," anos e não pode votar!")
           senao
                se (i >= 16) e (i < 18) ou (i > 70) entao
                   escreva ("Você terá ", i," anos e seu voto é facultativo!")
                senao
                     escreva ("Você terá ", i," anos e você deve votar!")
                fimse
           fimse
      fimse
Fimalgoritmo