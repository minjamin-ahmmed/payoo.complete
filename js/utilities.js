//Input Field Function
function showInputIdNumber (id){

    const digit = document.getElementById(id).value
    const digitNumber = parseFloat(digit)

    return digitNumber
}

//Text Field Function
function showTextIdNumber(id){
    const digit = document.getElementById(id).innerText
    const digitNumber = parseFloat(digit)
    return digitNumber
}

//Form Hide and Unhide
function showFormById(id){
    //Hide all the form
    document.getElementById('add-money-form').classList.add('hidden')
    document.getElementById('cash-out-form').classList.add('hidden')
    document.getElementById('latest-payment-form').classList.add('hidden')


    //UnHide Form
    document.getElementById(id).classList.remove('hidden')

}