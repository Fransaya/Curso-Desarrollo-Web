function num_Mayor(){
    var numero1=parseInt(document.getElementById('num1').value);
    var numero2=parseInt(document.getElementById('num2').value);

    if (numero1 && numero2) {
        if (numero1>=numero2){
            if (numero1==numero2){
                alert('los numeros son iguales')
            } else{
                alert('el ' + numero1 + ' es mayor')
            }
        }else {
            alert('el ' + numero2+ ' es mayor')
        }
    }else {
        alert('uno de los numeros no se ingreso.')
    }
    
}
    
    
  