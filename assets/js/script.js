function calculateTotal() {
    const value = parseFloat(document.getElementById('value').value);
    const fee = parseFloat(document.getElementById('fee').value);
    const time = parseFloat(document.getElementById('time').value);
    
    const total = (6 - value) * fee * time;

    document.getElementById('total').textContent = "R$" + total.toFixed(2).replace('.', ',');
}


//formula de porcentagem
// document.getElementById('calculate').addEventListener('click', function(){
//    const value = document.getElementById('value').value;
 //   const fee = (document.getElementById('fee').value) / 100;
   // const time = document.getElementById('time').value;

    // const total = value * (1 + fee)**time;

    //document.getElementById('total').innerHTML = ("R$ " + total.toFixed(2).replace('.', ','));
// });