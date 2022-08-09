Algoritmo "“peso_ideal“"
Var
   s : caracter
   p, a: real
Inicio
      enquanto (s <> "m") e (s <> "h") faca
               limpatela
               escreva ("Biologicamente você é homem ou mulher? (h/m): ")
               leia (s)
               se (s <> "m") e (s <> "h") entao
                 escreval ("              OPÇÃO INDISPONÍVEL               ")
                 escreval ("Digite APENAS “h“ para homem ou “m“ para mulher")
                 leia (s)
               fimse
      fimenquanto
      escreva ("Qual sua altura? ")
      leia (a)

      se (a > 10) entao
         a <- a / 100
      fimse
      
      se (s = "m") entao
        p <- (62.1 * a) - 44.7
      senao
           se (s = "h") entao
              p <- (72.7 * a) - 58
           fimse
      fimse
      
      escreval ("Se a massa de uma pessoa fosse baseada em matemática")
      escreval ("Sua massa ideal seria de ", p," kg")
Fimalgoritmo