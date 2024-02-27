# Amazon-Scraper

Este é um projeto de web scraping que permite pesquisar produtos na Amazon e exibir os resultados em uma página da web. O projeto consiste em uma aplicação web que utiliza Node.js no backend para realizar a raspagem de dados e servir uma API, e HTML, CSS e JavaScript no frontend para criar a interface de usuário e interagir com a API.

### Recursos:

>Pesquisa de produtos na Amazon: Os usuários podem inserir uma palavra-chave na caixa de pesquisa e clicar no botão "Scrape" ou pressionar Enter para iniciar a pesquisa.

>Exibição dos resultados: Os resultados da pesquisa são exibidos na página como cards de produtos, mostrando o título, classificação, avaliações e imagem do produto.

>Mensagem de "Nenhum resultado encontrado": Se nenhum resultado for encontrado para a palavra-chave inserida, uma mensagem indicando isso será exibida na página.

### Tecnologias utilizadas:

1. Node.js: Utilizado no backend para criar o servidor e realizar a raspagem de dados.
2. Express.js: Framework web utilizado para criar rotas e servir a API.
3. Axios: Biblioteca utilizada para fazer requisições HTTP para a Amazon.
4. Cheerio: Biblioteca utilizada para analisar e manipular o HTML da página da Amazon.
5. HTML, CSS e JavaScript: Utilizados no frontend para criar a interface de usuário e interatividade.

### Como executar o projeto:

Certifique-se de ter o Node.js instalado em sua máquina.

Clone este repositório.
```bash
git clone git@github.com:GabrielaMoura25/Amazon-Scraper.git
```

Abra um terminal na pasta do projeto e instale as dependências, executando o comando:
```bash
npm install
```

Para iniciar o servidor execute:
```bash
npm start
```

Abra um navegador da web e vá para http://localhost:3000.

Insira uma palavra-chave na caixa de pesquisa e pressione Enter ou clique no botão "Scrape" para iniciar a pesquisa.

Observação:
Este projeto é apenas para fins educacionais e não deve ser usado para violar os termos de serviço de qualquer site. Certifique-se de usar o web scraping de forma ética e respeitosa.

Desenvolvido por Gabriela Moura, © 2024.
