

let calc =function() {
    const bill =Number (document.getElementById('bill').value)
    const split = Number(document.getElementById('split').value)

    let tip  = bill * .15 ;
    let totalBill = bill + tip;
    let splitPerson = totalBill /split

   
    document.getElementById('tip').innerHTML = Number(tip).toFixed(2)
    document.getElementById('total').innerHTML = Number(totalBill).toFixed(2)
    document.getElementById('splittotal').innerHTML = Number(splitPerson).toFixed(2)


}