function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputAmountText = inputField.value;
  const inputAmount = parseFloat(inputAmountText);

  //clear the input field
  inputField.value = "";

  return inputAmount;
}

function updateTotalField(totalFieldId, totalAmount) {
  const totalElement = document.getElementById(totalFieldId);
  const totalText = totalElement.innerText;
  const previousTotal = parseFloat(totalText);

  //updating current deposit
  totalElement.innerText = totalAmount + previousTotal;
}

function getCurrentBalance() {
  const balanceTotal = document.getElementById("balance-total");
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);
  return previousBalanceTotal;
}

function updateBalanceField(totalAmount, isAdd) {
  const balanceTotal = document.getElementById("balance-total");
  const previousBalanceTotal = getCurrentBalance();
  //updating the current balance amount
  if (isAdd == true) {
    balanceTotal.innerText = previousBalanceTotal + totalAmount;
  } else {
    balanceTotal.innerText = previousBalanceTotal - totalAmount;
  }
}

document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const depositAmount = getInputValue("deposit-input");
    if (depositAmount > 0) {
      updateTotalField("deposit-total", depositAmount);
      updateBalanceField(depositAmount, true);
    } else {
      alert("Invalid input");
    }
  });

document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    //get withdraw value from the input field
    const withdrawAmount = getInputValue("withdraw-input");
    const currentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
      //get current withdraw amount
      updateTotalField("withdraw-total", withdrawAmount);
      //updating the current balance
      updateBalanceField(withdrawAmount, false);
    } else {
      alert("Invalid input");
    }
  });
