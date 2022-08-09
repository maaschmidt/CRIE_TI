Algoritmo "numeros_repita"
//Desenvolva um algoritmo que leia 5 numeros e diga se o número está ou não na
//faixa de 1200 à 3000 e quantos estão nesta faixa.
Var
   c, n, total: inteiro
Inicio
      repita
            escreva ("Número: ")
            leia (n)

            se (n >= 1200) e (n <= 3000) entao
               escreval ("Número correspondente")
               total <- total + 1
            senao
                 escreval ("Número NÃO correspondente")
            fimse
            escreval
            c <- c + 1
      ate c = 5
      escreval
      escreval ("Foi digiado",total, " números correspondentes")
Fimalgoritmo