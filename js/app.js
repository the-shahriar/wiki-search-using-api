const searchWiki = () => {
        const searchInput = document.getElementById('search-input');
        const searchText = searchInput.value;
        searchText.value = '';

        // load data
        const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchText}`;

        // Show data
        fetch(url)
        .then(res => res.json())
        .then(results => displayResult(results.query.search))
}

const displayResult = results => {
    const searchResult = document.getElementById('search-results');
    // Clearing previous data
    searchResult.textContent = '';
    results.forEach(result => {
        console.log(result);
        const url = `https://en.wikipedia.org/?curid=${result.pageid}`;
        const div = document.createElement('div');

        div.innerHTML = (
        `<div class="result-item">
          <h3 class="result-title">
            <a href="${url}" target="_blank" rel="noopener">${result.title}</a>
          </h3>
          <a href="${url}" class="result-link" target="_blank" rel="noopener">${url}</a>
          <span class="result-snippet">${result.snippet}</span><br>
        </div>
        `
        );
        searchResult.appendChild(div);
    });
  
}