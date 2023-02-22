// step-1:add event listner to the deposit button

document.getElementById('btn-deposit').addEventListener('click',function(){

    // s-2: get the deposite amount from the deposite input field 

    const depositField = document.getElementById('deposit-field');
    const newdepositAmount = depositField.value;
    
    //clear input field
    depositField.value = '';


    if(isNaN(parseFloat(newdepositAmount))){
      alert('provide Valid amount');
      return;
  }
  //current deposit total
  const updateDeposit = document.getElementById('update-deposit-amount');
  const preDepositAmount = updateDeposit.innerText;


  //total deposit
  const depositTotal = parseFloat(newdepositAmount) + parseFloat(preDepositAmount);

  //set deposit
  updateDeposit.innerText = depositTotal;

  //get balance
  const balanceTotal = document.getElementById('balance-total');
  const preBalance = balanceTotal.innerText;

  //new balance
  const newBalance = parseFloat(preBalance) + parseFloat(newdepositAmount);

  //set new balance
  balanceTotal.innerText = newBalance;

  

})






//     const newDepositAmount = parseFloat(newDepositAmountString);

// // s-3: get the current deposite total

//    const depositTotalElement =document.getElementById('deposit-total');

//    const previousDepositTotalString = depositTotalElement.innerText;

//    const previousDepositTotal = parseFloat(previousDepositTotalString);

// //  s-4: add numbers to set the total deposit   

// console.log(typeof previousDepositTotal);

// const currentDepositTotal = previousDepositTotal+ newDepositAmount;

//    depositTotalElement.innerText = currentDepositTotal;

// //    console.log(depositTotal);
// // s-5:get balance current total

// const balanceTotalElement = document.getElementById('balance-total');
// const previousBalanceTotalString = balanceTotalElement.innerText; 
// const previousBalanceTotal = parseFloat(previousBalanceTotalString);

// // s-6: calculate current balance

// const currentBalanceTotal =previousBalanceTotal + newDepositAmount;

// // set the balance total

// balanceTotalElement.innerText = currentBalanceTotal;



// // s-7:clear the deposit field

// depositField.value='';
// console.log(typeof newDepositAmount);

// })