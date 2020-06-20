const countrySelect = document.querySelector("#country-select");

const countryNameTitle = document.querySelector(".county-name-title")

const countryDiaryCases = document.querySelector("#diary-cases");
const countryMilionCases = document.querySelector("#milion-cases");
const countryAllCases = document.querySelector("#all-cases");

const countryDiaryDeaths = document.querySelector("#diary-deaths");
const countryMilionDeaths = document.querySelector("#milion-deaths");
const countryAllDeaths = document.querySelector("#all-deaths");

const countryMilionTests = document.querySelector("#milion-tests");
const countryAllTests = document.querySelector("#all-tests");

const countryActiveCases = document.querySelector("#active-cases");
const countryCriticalCases = document.querySelector("#critical-cases");
const countryRecovered = document.querySelector("#recovered");


let start = "World";


const getCovidDashboard = async country => {
    try {
        const covidApi = await fetch(`http://coronavirus-19-api.herokuapp.com/countries/${country}`)
 
        const data = await covidApi.json();
        console.log(data);


    countryNameTitle.innerHTML = `${data.country}`

    countryDiaryCases.innerHTML = `${data.todayCases}`
    countryMilionCases.innerHTML = `${data.casesPerOneMillion}`
    countryAllCases.innerHTML = `${data.cases}`

    countryDiaryDeaths.innerHTML = `${data.todayDeaths}`
    countryMilionDeaths.innerHTML = `${data.deathsPerOneMillion}`
    countryAllDeaths.innerHTML = `${data.deaths}`

    countryMilionTests.innerHTML = `${data.testsPerOneMillion}`
    countryAllTests.innerHTML = `${data.totalTests}`

    countryActiveCases.innerHTML = `${data.active}`
    countryCriticalCases.innerHTML = `${data.critical}`
    countryRecovered.innerHTML = `${data.recovered}`
    
    }catch(err){
        console.log(err);
    }

}

function populateCountry() {
    const url = "http://coronavirus-19-api.herokuapp.com/countries";
    fetch(url)
    .then( (res) => res.json())
    .then( countries => {
        for (const country of countries) {
            countrySelect.innerHTML += `<option value = ${country.country}>${country.country}</option>`
            
        }
        countrySelect.onchange=function(){
            let value = countrySelect.value;
            getCovidDashboard(value)
        }
        
        
    })
    .catch(error => console.error(error))
    
}



getCovidDashboard(start);
populateCountry();


