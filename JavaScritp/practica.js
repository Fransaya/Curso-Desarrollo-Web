function resultado(numero1,numero2){
    if (typeof(numero1,numero2)==Number && numero1 & numero2 >0){
        if (numero1>numero2){
            console.log(numero1 + ' es mayor')
            console.log(numero2 + ' es menor')
        } else if (numero2>numero1){
            console.log(numero1 + ' es menor')
            console.log(numero2 +' es mayor')
        } else {
          console.log('son iguales')}
    }else{
        console.log('vuelva a introducir los numeros')
    }
  }
    
    
  