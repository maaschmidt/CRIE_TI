Algoritmo "numeros"
//Desenvolva um algoritmo que leia 5 numeros e diga se o número está ou não na
//faixa de 1200 à 3000 e quantos estão nesta faixa.
Var
   c, n, total: inteiro
Inicio
      c <- 0
      total <- 0
      enquanto (c < 5) faca
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
      fimenquanto
      escreval
      escreval ("Foi digiado",total, " números correspondentes")
Fimalgoritmo