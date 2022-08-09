Algoritmo "07_login"
Var
   cod, senha, id, s: inteiro
Inicio
      cod <- 1234
      senha <- 9999

      escreval ("+-----------------------------+")
      escreval ("|        LOGIN CRIE_TI        |")
      escreval ("+-----------------------------+")
      escreva  ("           ID: "                )
      leia (id)
      escreval ("===============================")
      escreva  ("        Senha: "                )
      leia (s)
      escreval ("===============================")

      limpatela
      se (id = cod) e (s = senha) entao
         escreval ("                        ACESSO PERMITIDO                    ")
         escreval (" ____       ____        ______      ______                ______    ______")
         escreval ("/\  _`\    /\  _`\     /\__  _\    /\  ___\              /\__  _\  /\__  _\")
         escreval ("\ \ \/\_\  \ \ \_\ \   \/_/\ \/    \ \ \_                \/_/\ \/  \/_/\ \/")
         escreval (" \ \ \/_/_  \ \ ,  /      \ \ \     \ \  __\                \ \ \     \ \ \")
         escreval ("  \ \ \_\ \  \ \ \\ \      \_\ \__   \ \ \____               \ \ \     \_\ \__")
         escreval ("   \ \____/   \ \_\ \_\    /\_____\   \ \_____\               \ \_\    /\_____\")
         escreval ("    \/___/     \/_/\/ /    \/_____/    \/_____/ _____________  \/_/    \/_____/")
         escreval ("                                               /\____________\")
         escreval ("                                               \/____________/")
      senao
           escreval ("         ACESSO NEGADO")
      fimse


Fimalgoritmo