# 09.studyBackendApiInternet

- A internet e o HTTP
  Quando acesso um link, passo pelo Domain Name System (DNS) que traduzir o link pelo endereço para o computador (IP) que tem as informações que quero acessar até o servidor

  Comunicação entre computadores se conversam em HTTP (HyperText Transfer Protocol)
  Computador faz um PEDIDO e o servidor dá uma RESPOSTA
  A mensagem tem o "Request Line", o "Header" que também é conhecido como Meta Dados (Trás as informações necessárias para a mensagem fazer sentido) e por fim o "Body" que tem as mensagens

  Verbos HTTP: Get, Post, Put e Delete
  GET: Quero uma informação | POST: Quero enviar informação | PUT: Atualizar uma informação | DELETE: Deletar
  Existem respostas padronizadas de HTTP:
  1XX: Informar | 2xx: Sucesso | 3xx: Redirecionar | 4xx: Erro de Cliente | 5xx: Erro de Servidor

- Sobre o Front-End, o Back-End, o Cliente e o Servidor
  Servidor: Posso criar um servidor aque pode hospedar meus arquivos.
  Crio um servidor que recebe um request, response. Para pegar o caminho do meu arquivo, basta eu pegar a url do meu request (request.url). Com o fs eu leio meu arquivo passando o caminho do arquivo e e uma função que recebe o erro e o conteudo.
  No final eu escreve o cabeçalho do meu response 200 e type text/html e fecho minha response passando o conteúdo com a codificação (utf-8)

- API e WebAPI
  API (Application Programming Interface): Caixa de ferramentas com possíveis operações e não precisar "reinventar a roda"
  WebAPI: É uma API operada pela internet
  Formato de Entrega: XML (Parece o HTML) e JSON (JavaScript Object Notation)
