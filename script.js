// document.addEventListener("DOMContentLoaded", function(){

//     document.querySelector('form').onsubmit = function(){
//     fetch("https://open.er-api.com/v6/latest/USD")
//     .then((response) => response.json())

//     .then((data) => {
        
//         const value = document.querySelector("#currency").value.toUpperCase();
//         const rate = data.rates[value];

//         if (rate !== undefined) {
//             document.querySelector(
//                 "#result"
//             ).textContent = 'တစ်ဒေါ်လာလျှင် ${value} ${rate.toFixed(2)}';

//         } else {
//             document.querySelector("#result").textContent = 'Invalid Currency. Try a valid currency again!';
//         }
        
        
//     })
//     .catch((error) => {
//     console.log("Error", error);
//     });

//       return false;
//     };

// });

// Wait for the entire DOM content to be loaded before executing the code inside the function.
document.addEventListener("DOMContentLoaded", function() {

    // Select the form element and attach an onsubmit event listener to it.
    document.querySelector('form').onsubmit = function(event) {
        // Prevent the default form submission behavior.
        event.preventDefault();

        // Fetch the latest USD exchange rates from the provided API.
        fetch("https://open.er-api.com/v6/latest/USD")
            .then(response => response.json())  // Convert the response to JSON format.
            .then(data => {
                // Get the currency code entered by the user, trim any whitespace, and convert it to uppercase.
                const value = document.querySelector("#currency").value.trim().toUpperCase();
                // Retrieve the exchange rate for the specified currency code from the API response.
                const rate = data.rates[value];

                // If the exchange rate exists for the specified currency code.
                if (rate !== undefined) {
                    // Display the exchange rate in the result element.
                    document.querySelector("#result").textContent = `တစ်ဒေါ်လာလျှင် ${value} ${rate.toFixed(2)}`;
                } else {
                    // If the currency code is invalid, display an error message.
                    document.querySelector("#result").textContent = 'Invalid Currency. Try a valid currency again!';
                }
            })
            .catch(error => {
                // Log any errors that occur during the fetch operation to the console.
                console.log("Error", error);
            });

        // Return false to prevent the form from being submitted in the traditional way.
        return false;
    };

});

