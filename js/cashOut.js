document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault()

    let cashOutAccountNumber = showInputIdNumber('cash-out-account-number')
    let cashOutAmount = showInputIdNumber('cash-out-amount')
    let cashOutPin = showInputIdNumber('cash-out-pin')

    let cashOutAccountNumberStr = cashOutAccountNumber.toString()

    if(isNaN(cashOutAmount)){
        alert("input valid amount")
        return;
    }

    if(cashOutPin === 1234 && cashOutAccountNumberStr.length === 10 && !isNaN(cashOutAccountNumber) ){

        let balance = showTextIdNumber('balance')
        let totalBalance = balance - cashOutAmount;

        document.getElementById('balance').innerText = totalBalance;

        document.getElementById('cash-out-account-number').value = ''
        document.getElementById('cash-out-amount').value = ''
        document.getElementById('cash-out-pin').value = ''

        if(cashOutAmount > balance){
            alert("Do Not Have Sufficient Balance");
            return;
        }

    }else{
        alert("❌ Wrong Number or Pin")
    }
    
})