Algoritmo "5_trabalho"
Var
   h, m, sal, hex: real
Inicio
      escreva ("Informe seu salário por hora: R$")
      leia (sal)
      escreva ("Digite quantas horas completas você trabalhou no mês: ")
      leia (h)
      escreva ("Além dessas horas, digite quantos minutos você trabalhou: ")
      leia (m)
      
      m <- m / 60
      h <- h + m
      
      se (h > 160) entao
         hex <- (h - 160)*(sal * 1.5)
         sal <- sal * h + hex
      senao
           sal <- sal * h
      fimse

         limpatela
         escreva ("SALÁRIO A RECEBER: R$", sal)
Fimalgoritmo