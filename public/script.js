document.addEventListener('DOMContentLoaded', () => {
  const scrapeBtn = document.getElementById('scrapeBtn');
  const keywordInput = document.getElementById('keyword');
  const resultsDiv = document.getElementById('results');
  const noResultsDiv = document.getElementById('noResults');
  const loadingDiv = document.getElementById('loading');
  const searchKeywordSpan = document.getElementById('searchKeyword');

  async function performSearch() {
    const keyword = keywordInput.value.trim();

    if (keyword) {
      try {
        loadingDiv.style.display = 'block'; // Mostra o ícone de carregamento
        const response = await fetch(`/api/scrape?keyword=${keyword}`);
        const data = await response.json();

        resultsDiv.innerHTML = '';
        noResultsDiv.innerHTML = '';

        if (Array.isArray(data) && data.length > 0) {
          data.forEach(product => {
            if (product.title && product.rating && product.reviews && product.image) {
              const productDiv = document.createElement('div');
              productDiv.classList.add('product');
              productDiv.innerHTML = `
                <h2>${product.title}</h2>
                <p>Rating: ${product.rating}</p>
                <p>Reviews: ${product.reviews}</p>
                <img src="${product.image}" alt="Product Image">
              `;
              resultsDiv.appendChild(productDiv);
            } else {
               // Exibe a mensagem de "Nenhum resultado encontrado"
              noResultsDiv.innerHTML = `<h3>Nenhum resultado encontrado para "${keyword}", tente outra palavra-chave.</h3>`;
            }
          });
        }
      } catch (error) {
        console.error('Ocorreu um erro:', error);
      } finally {
        loadingDiv.style.display = 'none'; // Esconde o ícone de carregamento
      }
    } else {
      alert('Por favor, insira uma palavra-chave.');
    }
  }

  // Adicionando a funcionalidade de pesquisa quando a tecla Enter é pressionada
  keywordInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      performSearch();
    }
  });

  // Adicionando a funcionalidade de pesquisa quando o botão é clicado
  scrapeBtn.addEventListener('click', performSearch);
});
