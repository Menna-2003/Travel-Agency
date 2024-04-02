let paypal = document.querySelector(".method1");
let paypalinput = document.querySelector(".method1 input");
let credit = document.querySelector(".method2");
let creditinput = document.querySelector(".method2 input");

let ccn = document.getElementById("ccn");
let expirydate = document.getElementById("expirydate");
let securityCode = document.getElementById("securityCode");

ccn.setAttribute("disabled", "");
expirydate.setAttribute("disabled", "");
securityCode.setAttribute("disabled", "");

paypal.addEventListener("click", (e) => {
    console.log("clicked");
    creditinput.removeAttribute("checked");
    paypalinput.setAttribute("checked", "true");

    ccn.setAttribute("disabled", "");
    expirydate.setAttribute("disabled", "");
    securityCode.setAttribute("disabled", "");
});

credit.addEventListener("click", (e) => {
    console.log("clicked");
    paypalinput.removeAttribute("checked");
    creditinput.setAttribute("checked", "true");
    console.log(creditinput.hasAttribute("checked"));

    if (creditinput.hasAttribute("checked") == true) {
        ccn.removeAttribute("disabled");
        expirydate.removeAttribute("disabled");
        securityCode.removeAttribute("disabled");
    }
});
