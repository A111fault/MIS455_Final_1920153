function connect() {
    var searchTerm = document.getElementById("searchBox").value.trim();
    var url = `https://restcountries.com/v3.1/name/${searchTerm}`;

    fetch(url)
        .then(res => res.json())
        .then(data => 
            showInBrowser(data));
}