
function Quitar(){
    document.getElementById("cajanombre").value = nombre;
}

function Cajas(){
    document.getElementById("semestres").style = "inline"; 
    document.getElementById("promedio").style = "inline"; 
    document.getElementById("boton").style = "inline"; 
}

function Inicio(){
    window.location.href="index.html";
}

function Segundo(){
    if((document.getElementById("n3").value).toLowerCase() == "mexicana" && document.getElementById("n2").value >=18){
        nombre = document.getElementById("n1").value;
        //edad = document.getElementById("n2").value;
        //nacionalidad = document.getElementById("n3").value;
        window.location.href="second.html?"+nombre;
    }else{
        document.getElementById("n1").value = "";
        document.getElementById("n2").value = "";
        document.getElementById("n3").value = "";
        window.alert("No Aplica Beca");
    }
}

function Tercero(caja){
    if(document.getElementById("Lic").value == "Licenciatura"){
        if(document.getElementById("semestres").value >= 4 && document.getElementById("promedio").value >= 8.5){
            //tipocarrera = document.getElementById("Lic").value;
            //semestres = document.getElementById("semestres").value;
            //promedio = document.getElementById("promedio").value;
            console.log(caja)
            window.location.href="third.html?"+caja;
        }else{
            window.alert("No Aplica Beca");
            window.location.href="index.html";
        }
    }else{
        if(document.getElementById("semestres").value >= 2 && document.getElementById("promedio").value >= 8.5){
            //tipocarrera = document.getElementById("tec").value;
            //semestres = document.getElementById("semestres").value;
            //promedio = document.getElementById("promedio").value;
            window.location.href="third.html?"+caja;
        }else{
            window.alert("No Aplica Beca");
            window.location.href="index.html";
        }
    }

}

function Cuarto(caja){
    fecha = document.getElementById("fecha").value;
    nacimiento = document.getElementById("nacimiento").value;
    lugar = document.getElementById("direccion").value;
    calle = document.getElementById("calle").value;
    numero = document.getElementById("numero").value;
    codigo = document.getElementById("codigo").value;
    localidad = document.getElementById("localidad").value;
    //estado = document.getElementById("estado").value;
    telefono = document.getElementById("telefono").value;
    correo = document.getElementById("correo").value;
    window.location.href="Result.html?"+caja+"&"+fecha+"&"+lugar+"&"+calle+"&"+numero+"&"+codigo+"&"+localidad+"&"+telefono+"&"+correo;
}

