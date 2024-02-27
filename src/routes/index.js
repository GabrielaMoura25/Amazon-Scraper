const express = require('express');
const router = express.Router();
const scrapeRouter = require('./scrape');

// Roteador principal que importa todas as rotas do aplicativo
router.use('/api/scrape', scrapeRouter);

module.exports = router;
