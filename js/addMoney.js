document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault()

    let accountNumberAddMoney = showInputIdNumber('account-number-add-money')
    let addMoneyAmount = showInputIdNumber('amount-add-money')
    let pinNumber = showInputIdNumber('pin-add-money')

    let accountNumberAddMoneyStr = accountNumberAddMoney.toString()
    console.log(accountNumberAddMoney, addMoneyAmount, pinNumber)

    if(pinNumber === 1234 && accountNumberAddMoneyStr.length === 10 && !isNaN(accountNumberAddMoney) ){

        let balance = showTextIdNumber('balance')
        let totalBalance = balance + addMoneyAmount;

        document.getElementById('balance').innerText = totalBalance;

        document.getElementById('account-number-add-money').value = ''
        document.getElementById('amount-add-money').value = ''
        document.getElementById('pin-add-money').value = ''

    }else{
        alert("❌ Wrong Number or Pin")
    }
    
})