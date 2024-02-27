const express = require('express');
const router = express.Router();
const scrapeController = require('../controllers/scrapingController');

// Rota para a execução do scraping
router.get('/', scrapeController.scrape);

module.exports = router;
