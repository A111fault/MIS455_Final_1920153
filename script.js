function connect() {
    var searchTerm = document.getElementById("searchBox").value.trim();
    var url = `https://restcountries.com/v3.1/name/${searchTerm}`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            showInBrowser(data);
            document.getElementById("searchBox").value = ""; 
        });
}


function showInBrowser(data) {
    var displayArea = document.getElementById("displayArea");
    displayArea.textContent = "";

    var country = data[0]; // show only the first result

    var div = document.createElement("div");
    div.className = "countryBox";

    let languages = "N/A";
    if (country.languages) {
        languages = Object.values(country.languages).join(", ");
    }
    
    let currencies = "N/A";
    if (country.currencies) {
        currencies = Object.values(country.currencies).map(c => c.name).join(", ");
    }
    
    let timezones = "N/A";
    if (country.timezones) {
        timezones = country.timezones.join(", ");
    }
    
    let subregion = "N/A";
    if (country.subregion) {
        subregion = country.subregion;
    }
    

    div.innerHTML = `
         <img src="${country.flags.svg}" width="200" alt="Flag"><br><br>
        <strong>Country Name:</strong> ${country.name.common} <br>
        <strong>Capital:</strong> ${country.capital ? country.capital[0] : "N/A"} <br>
        <strong>Region:</strong> ${country.region} <br>
        <strong>Subregion:</strong> ${subregion} <br>
        <strong>Population:</strong> ${country.population.toLocaleString()} <br>
        
    `;

    displayArea.appendChild(div);
}
