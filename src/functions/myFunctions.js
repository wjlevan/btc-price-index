let my_bpi; // Global variable


// Make API Request
export function getRequestBPI() {
    let oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListenerBPI); // Call reqListenerBPI on load


    let btc_realtime = "https://api.coindesk.com/v1/bpi/currentprice.json";
    oReq.open("GET", btc_realtime);
    oReq.send();
    

    let x = setInterval(
        () => {

            // Run if data has loaded
            if(my_bpi) {
                 clearInterval(x);
                return my_bpi; // Return data if loaded
            }
        }, 1000        
    )
    return x; // Return if data not loaded
}






// Set global variable my_bpi on API request load
export function reqListenerBPI() {
    let responseText = JSON.parse(this.responseText);
    my_bpi = responseText; // Set global variable my_bpi
    return;
}




// Store relevant data using global variable my_bpi
export function setSelection(selection) {
    let currency = my_bpi['bpi'][selection]['code'];
    let price = my_bpi['bpi'][selection]['rate_float'];
    let date = my_bpi['time']['updated'];
    return [currency, price, date];
}



// Change date from UTC to Local 
export function changeDate(date) {
    let newDate = new Date(date); // Convert time to Local
    date = newDate.toLocaleString('en-US').replace(',',''); // Convert to AM/PM, remove comma
    return date;
}