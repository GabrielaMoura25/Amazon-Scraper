const scrapingService = require('../services/scrapingService');

// Controlador responsável por lidar com a lógica da rota de scraping
exports.scrape = async (req, res) => {
  try {
    // Extrai o parâmetro da query da requisição
    const { keyword } = req.query;
    // Chama o serviço de scraping, passando a palavra-chave como argumento
    const products = await scrapingService.scrapeAmazon(keyword);
    // Retorna os produtos extraídos como resposta
    res.json(products);
  } catch (error) {
    // Se ocorrer um erro, retorna uma resposta de erro com status 500
    res.status(500).json({ error: 'Ocorreu um erro ao processar sua solicitação.' });
  }
};
