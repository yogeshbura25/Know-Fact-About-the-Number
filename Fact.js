let userInputE1 = document.getElementById("userInput");
let spinnerE1 = document.getElementById("spinner");
let factE1 = document.getElementById("fact");

function getFactOfEnteredNumber(event) {
    if (event.key === "Enter") {
        let userInputval = userInputE1.value;
        if (userInputval === "") {
            alert("Enter a Number");
            return;
        }
        let url = "https://apis.ccbp.in/numbers-fact?number=" + userInputval;
        let options = {
            method: "GET"
        };
        spinnerE1.classList.remove("d-none");
        factE1.classList.add("d-none");

        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                factE1.classList.remove("d-none");
                spinnerE1.classList.add("d-none");
                let {
                    fact
                } = jsonData;
                factE1.textContent = fact;
            });
    }
}
userInputE1.addEventListener("keyup", getFactOfEnteredNumber);