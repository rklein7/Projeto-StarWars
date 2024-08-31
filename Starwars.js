const axios = require("axios");

async function obterPersonagem(nomeDoPersonagem) {
  try {
    const response = await axios.get(
      `https://swapi.dev/api/people?search=${nomeDoPersonagem}`
    );
    const personagem = response.data.results[0];

    if (!personagem) {
      console.log(`Personagem "${nomeDoPersonagem}" não encontrado.`);
      return;
    }

    console.log("Dados do personagem:", personagem);
    console.log("=======================================");

    const uriDaNave = personagem.starships[0];
    if (uriDaNave) {
      await buscarNave(uriDaNave);
    } else {
      console.log(`${nomeDoPersonagem} não possui naves registradas.`);
    }
  } catch (error) {
    console.error("Erro ao obter personagem:", error.message);
  }
}

async function buscarNave(uriDaNave) {
  try {
    const response = await axios.get(uriDaNave);
    const { name, films } = response.data;

    console.log("Nave do personagem:", name);
    console.log("=======================================");

    const uriDoFilme = films[0];
    if (uriDoFilme) {
      await buscarFilme(uriDoFilme);
    } else {
      console.log("Essa nave não aparece em nenhum filme registrado.");
    }
  } catch (error) {
    console.error("Erro ao buscar nave:", error.message);
  }
}

async function buscarFilme(uriDoFilme) {
  try {
    const response = await axios.get(uriDoFilme);
    const { title, opening_crawl } = response.data;

    console.log("Filme em que a nave aparece:", title);
    console.log("=======================================");
    console.log("Texto de abertura:", opening_crawl);
    console.log("=======================================");
  } catch (error) {
    console.error("Erro ao buscar filme:", error.message);
  }
}

obterPersonagem("Darth Vader");