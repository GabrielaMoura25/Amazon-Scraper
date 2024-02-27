const axios = require('axios');
const cheerio = require('cheerio');

// Serviço responsável por realizar o scraping do site da Amazon
exports.scrapeAmazon = async (keyword) => {
    // URL de busca na Amazon, com a palavra-chave fornecida como parâmetro
  const url = `https://www.amazon.com/s?k=${keyword}`;
  // Cabeçalhos HTTP para simular um navegador
  const headers = {
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
    'accept-language': 'en-GB,en;q=0.9',
  };

  const config = { headers };

  // Faz uma requisição HTTP GET para a URL da Amazon, usando Axios
  const response = await axios.get(url, config);
  // Extrai o HTML da resposta
  const html = response.data;
  // Carrega o HTML no Cheerio para poder manipular e extrair dados facilmente
  const $ = cheerio.load(html);

  const products = [];

  // Itera sobre os elementos HTML correspondentes aos produtos na página
  $('.s-result-item').each((_, element) => {
    // Extrai o título do produto
    const title = $(element).find('[data-cy="title-recipe"] h2 a span.a-text-normal').text().trim();
    // Extrai a classificação do produto
    const rating = $(element).find('.a-icon-star-small .a-icon-alt').text().trim();
    // Extrai o número de avaliações do produto
    const reviews = $(element).find('.a-size-small.a-link-normal').text().trim();
    // Extrai o URL da imagem do produto
    const image = $(element).find('.s-image').attr('src');

    // Adiciona as informações do produto ao array de produtos
    products.push({ title, rating, reviews, image });
  });

  // Retorna o array de produtos extraídos
  return products;
};
