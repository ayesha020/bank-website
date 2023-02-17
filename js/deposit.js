// check-console.log('deposit.js');

// step-1:add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){

    // step-2: get the deposite amount from the deposite input field
    const depositField = document.getElementById('deposit-field');
    const depositAmount = depositField.value;
//    step-3:get the current deposit total 
const depositTotalElement = document.getElementById('deposit-total');
const depositTotal = depositTotalElement.innerNumber;
depositTotalElement.innerNumber = depositAmount;

})
