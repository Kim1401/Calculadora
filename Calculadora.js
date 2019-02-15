class operation{
    
    //tomar las variables
    constructor(_numero1, _numero2){
        this.numero1=_numero1;
        this.numero2=_numero2;
    }
    //operaciones
    Sumar(){
        //return this.numero1+this.numero2;
        //inicio promesa suma
        let objetoautilizar=this;
        return new Promise(function(resolve,reject){
            try{
                resolve(objetoautilizar.numero1+objetoautilizar.numero2);
            }
            catch(err){
                reject(err.message);
            }
        });
        //fin promesa suma
    }
    Restar(){
        //return this.numero1-this.numero2;
        //inicio promesa resta
        let objetoautilizar=this;
        return new Promise(function(resolve,reject){
            try{
                resolve(objetoautilizar.numero1-objetoautilizar.numero2);
            }
            catch(err){
                reject(err.message);
            }
        });
        //fin promesa resta
    }
    Multiplicar(){
        //return this.numero1*this.numero2;
        //inicio promesa multiplicacion
        let objetoautilizar=this;
        return new Promise(function(resolve,reject){
            try{
                resolve(objetoautilizar.numero1*objetoautilizar.numero2);
            }
            catch(err){
                reject(err.message);
            }
        });
        //fin promesa multiplicacion
    }
    Dividir(){
        //return this.numero1/this.numero2;
        //inicio promesa división
        let objetoautilizar=this;
        return new Promise(function(resolve,reject){
            try{
                resolve(objetoautilizar.numero1/objetoautilizar.numero2);
            }
            catch(err){
                reject(err.message);
            }
        });
        //fin promesa división
    }
}


//función para dar al input el valor de los números de los botones//
let tipodesigno='';
let numero1=0;
let numero2=0;
let snum="";

function imp(n){
    snum+=n;
    document.getElementById("num").value=snum;
}
//función para dar al número escrito el valor de numero
function llamar(p){
    //number= convertir variable tipo texto en tipo número
    tipodesigno=p;
    numero1=Number(snum);
    document.getElementById("num").value=numero1;
    snum="";
}
//función para mostrar el resultado
function resultado(){
    numero2=Number(snum);
    document.getElementById("num").value=numero2;
    snum="";
    let claseoperacioninstanciada= new operation(numero1, numero2);
    console.log(tipodesigno);

    //inicio, switch (método 2)
    switch(tipodesigno){
        case "/":
        claseoperacioninstanciada.Dividir().then(function(response){
            document.getElementById("num").value=response;
        },function(error){
            document.getElementById("num").value="meperd 0nas";
        });
        break;
        case "+":
        claseoperacioninstanciada.Sumar().then(function(response){
            document.getElementById("num").value=response;
        },function(error){
            document.getElementById("num").value="meperd 0nas";
        });
        break;
        case "-":
        claseoperacioninstanciada.Restar().then(function(response){
            document.getElementById("num").value=response;
        },function(error){
            document.getElementById("num").value="meperd 0nas";
        });
        break;
        case "x":
        claseoperacioninstanciada.Multiplicar().then(function(response){
            document.getElementById("num").value=response;
        },function(error){
            document.getElementById("num").value="meperd 0nas";
        });
        break;
    }
}
    //fin, switch 2

//inicio switch (método 1)
    //switch(tipodesigno){
    //    case "/":
    //        document.getElementById("num").value=claseoperacioninstanciada.Dividir();
    //    break;
    //    case "+":
    //        document.getElementById("num").value=claseoperacioninstanciada.Sumar();
    //    break;
    //    case "-":
    //        document.getElementById("num").value=claseoperacioninstanciada.Restar();
    //    break;
    //    case "x":
    //        document.getElementById("num").value=claseoperacioninstanciada.Multiplicar();
    //    break;
    //    
    //    default:
    //        console.log("default");
    //    break;
    //}    
//fin switch