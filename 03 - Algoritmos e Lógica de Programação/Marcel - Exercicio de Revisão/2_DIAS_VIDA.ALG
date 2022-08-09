Algoritmo "02_dias_vida"
Var
   anos, meses, dias: inteiro

Inicio
      escreva ("Quantos anos você tem? ")
      leia (anos)
      escreva ("A quantos meses completos você ja fez aniversário? ")
      leia (meses)
      escreva ("Do mês incompleto, quantos dias ja se passaram?")
      leia (dias)

      anos <- anos * 365
      meses <- meses * 30
      dias <- anos + meses + dias

      escreval
      escreval ("Você está vivo a", dias," dias.")
Fimalgoritmo