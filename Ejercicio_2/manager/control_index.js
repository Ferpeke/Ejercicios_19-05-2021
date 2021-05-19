$(document).ready(function(){

  $('#btn_buscar_documento').click(function(){

    $.ajax({

      type : 'POST',
      url : './control/archivo_1.php',
      data : {
        'respuesta' : 'Soy el archivo Uno'

      }, 
      success : function(resp){
         
        $('#mostrar_mensaje_uno').text(resp);
      }



    });

    $.ajax({

      type : 'POST',
      url : './control/archivo_2.php',
      data : {
        'respuesta' : 'Soy el archivo Dos'

      }, 
      success : function(resp){
         
        $('#mostrar_mensaje_dos').text(resp);
      }



    });

    $.ajax({

      type : 'POST',
      url : './control/archivo_3.php',
      data : {
        'respuesta' : 'Soy el archivo Tres'

      }, 
      success : function(resp){
         
        $('#mostrar_mensaje_tres').text(resp);
      }



    });


  });

});