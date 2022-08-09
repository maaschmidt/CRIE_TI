Algoritmo "ocorrência"
Var
   h1, m1, s1, h2, m2, s2: inteiro
   h, m, s: real
   op: caracter
Inicio
      escreval ("Entrada na ocorência!")
      escreva  ("Hora(24h): ")
      leia (h1)
      escreva  ("Minutos: ")
      leia (m1)
      escreva  ("Segundos: ")
      leia (s1)
      limpatela
      escreval ("Saída da ocorência!")
      escreva  ("Hora(24h): ")
      leia (h2)
      escreva  ("Minutos: ")
      leia (m2)
      escreva  ("Segundos: ")
      leia (s2)
      
      h <- h2 - h1
      m <- m2 - m1
      s <- s2 - s1
      se (m < 0) entao
         h <- h - 1
         m <- 60 + m
      fimse
      se (s < 0) entao
         m <- m - 1
         s <- 60 + s
      fimse
      
      limpatela
      escreval ("Como você quer ver o tempo? (hr/m/seg): ")
      leia (op)
      se (op = "hr") ou (op = "HR") ou (op = "Hr") ou (op = "hR") entao
         escreval(h + (m/60) + (s/60)/60:4:2)
      senao
           se (op = "m") ou (op = "M") ou (op = "min") entao
              escreval(h*60 + m + (s/60):4:2)
           senao
                se (op = "seg") ou (op = "SEG") ou (op = "s") ou (op = "S") entao
                   escreval((h*60)*60 + m*60 + s:6:2)
                fimse
           fimse
      fimse
Fimalgoritmo