function objetivo(objetivo){
    window.localStorage.setItem("objetivo",objetivo);
    var nombre = window.localStorage.getItem("nombre");
    var dataString = "nombre=" + nombre + "&objetivo=" + objetivo + "&update=";
    $.ajax({
        type:"POST",
        url: "https://andreaconeche.000webhostapp.com/actualizaObjetivo.php",
        data: dataString,
        crossDomain: true,
        cache: false,
        success: function(data) {
          if (data == "success") {
            window.location.replace("principal.html");
          } else if (data == "error") {
              alert("error");
          }
      }
      });
}