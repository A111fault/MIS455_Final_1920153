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

    
    

    div.innerHTML = `
         <img src="${country.flags.svg}" width="200" alt="Flag"><br><br>
        <strong>Country Name:</strong> ${country.name.common} <br>
        <strong>Capital:</strong> ${country.capital ? country.capital[0] : "N/A"} <br>
        <strong>Region:</strong> ${country.region} <br>
        <strong>Subregion:</strong> ${subregion} <br>
       
    `;

    displayArea.appendChild(div);
}
