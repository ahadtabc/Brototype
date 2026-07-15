let MYcheckbox = document.getElementById("mycheckbox");
let MYvisa = document.getElementById("visaBtn");
let MYmaster = document.getElementById("masterBtn");
let MYpaypal = document.getElementById("payPalBtn");
let MYsubmit = document.getElementById("mySubBtn");
let MYsubResult = document.getElementById("subResult");
let MYpayment = document.getElementById("paymentMethod");

MYsubmit.onclick = function () {

    if (MYcheckbox.checked) {
        MYsubResult.textContent = 'You are subscribed';

        if (MYvisa.checked) {
            MYpayment.textContent = 'You are selected VISA';
        } else if (MYmaster.checked) {
            MYpayment.textContent = 'You are selected MasterCard';
        } else if (MYpaypal.checked) {
            MYpayment.textContent = 'You are selected Paypal';
        } else {
            MYpayment.textContent = 'Payment is not selected';
        }

    } else {
        MYsubResult.textContent = "You're not subscribed";
    }
}
