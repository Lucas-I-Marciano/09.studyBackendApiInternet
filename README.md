﻿# Study - Backend: Api Internet

- A internet e o HTTP<br>
  Quando acesso um link, passo pelo Domain Name System (DNS) que traduzir o link pelo endereço para o computador (IP) que tem as informações que quero acessar até o servidor<br>

  Comunicação entre computadores se conversam em HTTP (HyperText Transfer Protocol)<br>
  Computador faz um PEDIDO e o servidor dá uma RESPOSTA<br>
  A mensagem tem o "Request Line", o "Header" que também é conhecido como Meta Dados (Trás as informações necessárias para a mensagem fazer sentido) e por fim o "Body" que tem as mensagens<br>

  Verbos HTTP: Get, Post, Put e Delete<br>
  GET: Quero uma informação | POST: Quero enviar informação | PUT: Atualizar uma informação | DELETE: Deletar
  Existem respostas padronizadas de HTTP:<br>
  1XX: Informar | 2xx: Sucesso | 3xx: Redirecionar | 4xx: Erro de Cliente | 5xx: Erro de Servidor<br>

- Sobre o Front-End, o Back-End, o Cliente e o Servidor<br>
  Servidor: Posso criar um servidor aque pode hospedar meus arquivos.<br>
  Crio um servidor que recebe um request, response. Para pegar o caminho do meu arquivo, basta eu pegar a url do meu request (request.url). Com o fs eu leio meu arquivo passando o caminho do arquivo e e uma função que recebe o erro e o conteudo.<br>
  No final eu escreve o cabeçalho do meu response 200 e type text/html e fecho minha response passando o conteúdo com a codificação (utf-8)<br>

- API e WebAPI<br>
  API (Application Programming Interface): Caixa de ferramentas com possíveis operações e não precisar "reinventar a roda"<br>
  WebAPI: É uma API operada pela internet<br>
  Formato de Entrega: XML (Parece o HTML) e JSON (JavaScript Object Notation)<br>

- Anatomia da Requisição (ROTA)<br>
  Padrão ter Protocolo (HTTP) e Servidor que quero acessar: porta(Localhost). Tudo depois é rota variável (Endpoint - legal escrever em "kebab-case" separado por traço e sempre minúsculo)<br>
  Posso passar parâmetros em minha url usando as <b>"QUERY STRING PARAMETERS"</b> com o padrão de após o EndPoint colocar uma interrogação "?" e caso queira mais de um parâmetro separar com "&". Para lidar com a Query String eu podia fazer no braço, mas posso usar a biblioteca URL do node<br>
  Para pegar os parâmetros, basta acessar o atributo "searchParams" do objeto URL e usar o método "get"<br>

- Node watch e json crack<br>
  Como se eu usasse um LIVE SERVER, que atualiza sempre que o node perceber mudanças. Basta usar node --watch "[CAMINHO DO SEU PROGRAMA]<br>
  <a href="https://jsoncrack.com/editor">Json Crack</a> é um bom software para ver o meu JSON melhor estruturado<br>

- Tratando erros na requisição<br>
- Anatomia da requisição: Os Métodos HTTP<br>
  Além da URL, eu tenho mais informações no método de requisição. Uma informação de URL = "Endereço" e Método = "O que vou fazer nesse endereço". Request URL: http://localhost:8000/get-by-id?id=4 | Request Method:GET<br>
  Métodos (Ou "verbos http"): GET, POST, PUT, DELETE<br>
  <ul>
  <li>GET: O Padrão e usado para ler/conseguir informações</li>
  <li>POST: Registrar novas informações</li>
  <li>PUT: Alterar informações</li>
  <li>DELETE: Apagar informações</li>
  </ul>
  Legar ter o Insomnia para criar API<br>

- Qual método usar?<br>
  Os métodos não travam nenhum tipo de requisição, mas eles dão mais clareza na comunicação via internet<br>

- NPM, package.json e scripts<br>
  Para rodar um comando do package.json, basta colocar uma nova chave e o comando que você deseja roda. Para rodar basta digitar "npm run [NOME_DO_SCRIPT]
