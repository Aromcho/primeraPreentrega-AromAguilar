function convertir(){
    let valor=parseFloat(document.getElementById("cantidad").value);
    document.getElementById("valor").innerHTML="<b>"+valor+"</b>";
    let de=document.getElementById("de").value;
    let a=document.getElementById("a").value;
    let dolar = 905.00;
    let euro = 1049.00;
    let resultado = 0;

    if(de==1&&a==2){
        resultado=valor/dolar;
    }else if(de==1&&a==3){
        resultado=valor/euro;
    }else if(de==2&&a==1){
        resultado=valor*dolar;
    }else if(de==2&&a==3){
        resultado=valor*(dolar/euro);
    }else if(de==3&&a==1){
        resultado=valor*euro;
    }else if(de==3&&a==2){
        resultado=valor*(euro/dolar);
    }else{
        resultado=valor;
    }
    document.getElementById("resultado").innerHTML="Resultado: $" + resultado.toFixed(2);
    
    


}