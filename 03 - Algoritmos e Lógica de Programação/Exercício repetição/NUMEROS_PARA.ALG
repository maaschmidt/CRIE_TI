Algoritmo "numeros_para"
//Desenvolva um algoritmo que leia 5 numeros e diga se o n�mero est� ou n�o na
//faixa de 1200 � 3000 e quantos est�o nesta faixa.
Var
   c, n, total: inteiro
Inicio
      para c de 1 ate 5 faca
           escreva ("N�mero: ")
           leia (n)

           se (n >= 1200) e (n <= 3000) entao
              escreval ("N�mero correspondente")
              total <- total + 1
           senao
                escreval ("N�mero N�O correspondente")
           fimse
           escreval
      fimpara
      escreval
      escreval ("Foi digiado",total, " n�meros correspondentes")
Fimalgoritmo