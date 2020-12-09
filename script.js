var tip = document.querySelector("#tip-percentage")
var total = document.querySelector("#total")
var submit = document.querySelector("#submit")

function calculateTip(total, tipPercentage) {
    var roundedResult = (total * tipPercentage).toFixed(2);
    return roundedResult;
}

function calculateTotal(total, tipAmount) {
    return parseFloat(total) + parseFloat(tipAmount);
}

function addTip(event) {
    event.preventDefault();
    var tipPercentage = tipEl.value * .20;
    var total = totalEl.value;
    var tipAmount = calculateTip(total, tipPercentage);
    var newTotal = calculateTotal(tipAmount, total);
    document.querySelector("#tip-amount").textContent = tipAmount;
    document.querySelector("#new-total").textContent = newTotal.toFixed(2);
}







submitEl.addEventListener("click", addTip)
splitEl.addEventListener("click", splitTotal)