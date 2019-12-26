/*var v1 = document.getElementById("p1");
var valor1 = v1.options[v1.selectedIndex].value;*/
/*var valor1 =$("#p1 option:selected").html();*/

/*var v2 = document.getElementById("p2");
var valor2 = v2.options[v2.selectedIndex].value;*/
/*var valor2 =$("#p2 option:selected").html();*/


/*var v3 = document.getElementById("p3");
var valor3 = v3.options[v3.selectedIndex].value;*/
/*var valor3 =$("#p3 option:selected").html();*/


/*var v4 = document.getElementById("p4");
var valor4 = v4.options[v4.selectedIndex].value;*/
/*var valor4 =$("#p4 option:selected").html();*/


/*var v5 = document.getElementById("p5");
var valor5 = v5.options[v5.selectedIndex].value;*/
/*var valor5 =$("#p5 option:selected").html();*/


/*var v6 = document.getElementById("p6");
var valor6 = v6.options[v6.selectedIndex].value;*/
/*var valor6 =$("#p6 option:selected").html();*/



/*console.log(valor1);
console.log(valor2);

console.log(valor3);
console.log(valor4);

console.log(valor5);
console.log(valor6);*/
console.log("holaaaa");
function val1(){
    var valor1=document.getElementById("p1").value;
    var valor2=document.getElementById("p2").value;
    var valor3=document.getElementById("p3").value;
    var valor4=document.getElementById("p4").value;
    var valor5=document.getElementById("p5").value;
    var valor6=document.getElementById("p6").value;
    console.log(valor1);
    console.log(valor2);
    console.log(valor3);
    console.log(valor4);
    console.log(valor5);
    console.log(valor6);
    
$(document).ready(function(){

    
    
    $("button").click(function(){
        
        
       if(valor1=="no" && valor2=="no" && valor3=="si" && valor4=="si" && valor5=="si" && valor6=="si"){
           location.reload();
           location.href="/Calificacion/calificacion.html"
       } 
       else{
           console.log("Lo sentimos, no alcanzo el puntaje requerido");
       }
        });
    });

}
