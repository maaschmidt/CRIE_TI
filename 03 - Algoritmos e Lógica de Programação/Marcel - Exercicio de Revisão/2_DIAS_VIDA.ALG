Algoritmo "02_dias_vida"
Var
   anos, meses, dias: inteiro

Inicio
      escreva ("Quantos anos voc� tem? ")
      leia (anos)
      escreva ("A quantos meses completos voc� ja fez anivers�rio? ")
      leia (meses)
      escreva ("Do m�s incompleto, quantos dias ja se passaram?")
      leia (dias)

      anos <- anos * 365
      meses <- meses * 30
      dias <- anos + meses + dias

      escreval
      escreval ("Voc� est� vivo a", dias," dias.")
Fimalgoritmo