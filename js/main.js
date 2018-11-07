function  calculoIMC(){
    
   // alert("hola mundo");
 //  document.getElementById("error_form").innerHTML="Este es un Error !!";
  var altura=+(document.getElementById("altura").value);
  altura = altura.toString().replace('.','');
  altura=altura/100;
  var peso=+document.getElementById("peso").value;

 if(peso==""){
    document.getElementById("error_form").innerHTML="Ingrese peso !!"; 
 }
 else if(altura==""){
    document.getElementById("error_form").innerHTML="Ingrese Altura!!"; 
 }
 else if(peso<0){
    document.getElementById("error_form").innerHTML="peso debe ser mayor a cero!"; 
}
 else if(altura<0){
    document.getElementById("error_form").innerHTML="altura debe ser mayor a cero!"; 
 }
 else{
       var alturacuadrado = altura*altura;
       var imc=peso/alturacuadrado;

       document.getElementById("imc").value=Math.round(imc*100)/100;
      // alert(Math.round(imc*100));
      if(imc<16){
        document.getElementById("estado").value="Delgadez Severa";
      }
      if(imc>16&&imc<=16,99){
        document.getElementById("estado").value="Delgadez moderada";

      }
     
 }

}
function valida(e){
    tecla = (document.all) ? e.keyCode : e.which;

    //Tecla de retroceso para borrar, siempre la permite
    if (tecla==8){
        return true;
    }
        
    // Patron de entrada, en este caso solo acepta numeros
    patron =/[0-9]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}
function limpiar(){
     
    document.getElementById("error_form").innerHTML="";
}