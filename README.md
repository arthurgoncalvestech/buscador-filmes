# 🎬 Buscador de Filmes

Aplicação web simples que permite buscar informações sobre filmes usando a OMDb API. Digite o nome de um filme e veja pôster, sinopse, gênero, diretor, elenco e nota do IMDb.

🔗 **[Ver projeto ao vivo](https://arthurgoncalvestech.github.io/buscador-filmes/)**

![Preview do projeto](assets/screenshot.png)

## Funcionalidades

- Busca de filmes por nome
- Exibição de pôster, título, ano, sinopse, gênero, diretor, elenco e nota IMDb
- Validação de campo vazio antes da busca
- Tratamento de erro para filmes não encontrados
- Tratamento de erro de conexão/rede

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla JS, sem frameworks)
- [OMDb API](https://www.omdbapi.com/)

## Como rodar localmente

1. Clone o repositório:

   ```bash
   git clone https://github.com/arthurgoncalvestech/buscador-filmes.git
   ```

2. Entre na pasta do projeto:

   ```bash
   cd buscador-filmes
   ```

3. Abra o `index.html` no navegador. É recomendado usar a extensão **Live Server** do VS Code, pois o projeto faz requisições via `fetch`, que exigem servir os arquivos por HTTP em vez de abrir diretamente.

4. Crie uma chave gratuita em [omdbapi.com/apikey.aspx](https://www.omdbapi.com/apikey.aspx) e substitua a chave usada no arquivo `assets/script.js`.

## Aprendizados

Este foi meu primeiro projeto de portfólio. Durante o desenvolvimento, pratiquei manipulação do DOM, consumo de API com `fetch` e `async/await`, tratamento de erros com `try/catch`, e organização de um projeto do zero até o deploy no GitHub Pages.

## Autor

**Arthur Gonçalves** [GitHub](https://github.com/arthurgoncalvestech)
