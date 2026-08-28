const botao = document.getElementById("botao-busca");
const campo = document.getElementById("campo-busca");
const resultado = document.getElementById("resultado");

botao.addEventListener("click", async function () {
  const filme = campo.value;

  if (filme.trim() === "") {
    resultado.innerHTML = `<p>Digite o nome de um filme.</p>`;
    return;
  }

  const url = `https://www.omdbapi.com/?apikey=5718388a&t=${filme}`;

  try {
    const resposta = await fetch(url);
    const dados = await resposta.json();

    console.log(dados);

    if (dados.Response === "True") {
      resultado.innerHTML = `
        ${dados.Poster !== "N/A"
          ? `<img src="${dados.Poster}" alt="Pôster de ${dados.Title}">`
          : ""
        }

        <h2>${dados.Title} (${dados.Year})</h2>
        <p>${dados.Plot}</p>
        <p><strong>Gênero:</strong> ${dados.Genre}</p>
        <p><strong>Diretor:</strong> ${dados.Director}</p>
        <p><strong>Elenco:</strong> ${dados.Actors}</p>
        <p><strong>Nota IMDb:</strong> ${dados.imdbRating}</p>
      `;
    } else {
      resultado.innerHTML = `<p>Filme não encontrado.</p>`;
    }
  } catch (erro) {
    resultado.innerHTML = `<p>Erro ao buscar o filme. Tente novamente.</p>`;
  }
});