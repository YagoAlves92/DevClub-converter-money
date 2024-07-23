
const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")




function convertValues() {
    const inputCurencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")


    const dolarTooday = 5.25
    const euroTooday = 5.75
    const libraToday = 6.80
    const dolarCanadenseToday = 3.88


    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurencyValue / dolarTooday)
        /*formatação de valores de moeda*/

    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurencyValue / euroTooday)

    }

    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurencyValue / libraToday)


    }

    if (currencySelect.value == "dolar-canadense") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-CA", {
            style: "currency",
            currency: "CAD"
        }).format(inputCurencyValue / dolarCanadenseToday)}

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurencyValue)


    }




function currencyChange() {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.querySelector(".currency-img")



    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "./assets/usa.png"


    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImg.src = "./assets/libra.png"



    }

    if (currencySelect.value == "dolar-canadense") {
        currencyName.innerHTML = "Dólar Canadense"
        currencyImg.src = "./assets/canada.png"

    }
    convertValues()


}



currencySelect.addEventListener("change", currencyChange)
convertButton.addEventListener("click", convertValues)
