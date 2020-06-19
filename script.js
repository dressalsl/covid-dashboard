const countrySelect = document.querySelector("select[name=country]");
const countryName = document.querySelector(".country-name");


function populateCountry() {
    const url = "http://coronavirus-19-api.herokuapp.com/countries";
    fetch(url)
    .then( (res) => res.json())
    .then( countries => {
        for (const country of countries) {
            countrySelect.innerHTML += `<option value = "">${country.country}</option>`
            // countryName.innerHTML += `<h2>${country.country}</h2>`
            // console.log(country);
        }
        
        
    })
    .catch(error => console.error(error))
    
}

countrySelect.addEventListener('change', populateCountry());
