let btc_realtime = "https://api.coindesk.com/v1/bpi/currentprice.json";
// let btc_historic = "https://api.coindesk.com/v1/bpi/historical/close.json";
let bpi;

export function reqListenerBPI() {
    let responseText = JSON.parse(this.responseText);
    bpi = responseText;
    return bpi;
}

export function getRequestBPI() {
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListenerBPI);
    oReq.open("GET", btc_realtime)
    oReq.send();
    let x = setInterval(
        () => {
            if(bpi) {
                 clearInterval(x);
                return bpi;
            }
            else {
                console.log("Error");;
            }
            }, 500
        
    )
    return x;
}

export function getBPI() {
    return bpi;
}

export function setSelection(selection) {
    let currency = bpi['bpi'][selection]['code'];
    let price = bpi['bpi'][selection]['rate_float'];
    let date = bpi['time']['updated'];
    return [currency, price, date];
}

export function changeDate(date) {
    let newDate = new Date(date);
    date = newDate.toString().substring(0, 25) + "PDT";
    return date;
}