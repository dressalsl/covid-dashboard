const countrySelect = document.querySelector("select[name=country]");
// const countryName = document.querySelector("select[name=country-name]");



countrySelect.addEventListener("change",populateCountry)
// countryName.addEventListener('submit', getNameCountry);

function populateCountry() {
    const url = "http://coronavirus-19-api.herokuapp.com/countries";
    fetch(url)
    .then( (res) => res.json())
    .then( countries => {
        for (const country of countries) {
            countrySelect.innerHTML += `<option value = "">${country.country}</option>`
        }
        
    })
    
}

populateCountry()

//https://github.com/ja-gaeta/busca-cep/blob/master/app.js

// function getNameCountry(e){
//     e.preventDefault();

//     fetch(`http://coronavirus-19-api.herokuapp.com/countries/${country}`)
// }

// function getNameCountry(event) {
//     const countrySelect = document.querySelector("[name=country]");
//     const url = "http://coronavirus-19-api.herokuapp.com/countries/${country}";
//     fetch(url)
//     console.log(url)
//     .then((response) => response.json())
//     .then( countries =>{
//         for (const country of countries) {
//             countrySelect.innerHTML += `<h2>${country.country}</h2>`
//         }
//     }
// }
    
