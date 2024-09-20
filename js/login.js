document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault()

    const number = showInputIdNumber('number-field')
    const pinNumber = showInputIdNumber('pin-field')

    //Convert Number into String to validate 11 digit Number
    const numberStr = number.toString()

    if(numberStr.length === 10 && !isNaN(number) && pinNumber === 1234){

        window.location.href = '/home.html';
   
    }else{
        alert("❌Input valid digit")
    }
    

})