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
            <h2>${dados.Title}</h2>
            <p>${dados.Plot}</p>
        `;
        } else {
        resultado.innerHTML = `<p>Filme não encontrado.</p>`;
        }
    } catch (erro) {
        resultado.innerHTML = `<p>Erro ao buscar o filme. Tente novamente.</p>`;
    }
    });