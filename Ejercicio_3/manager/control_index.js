$(document).ready(function(){

  $('#btn_visitar_documentos').click(function(){

    $.ajax({

      type : 'POST',
      url : './control/archivo_3.php',
      data : {
        'respuesta_uno' : 'Hola ',
        'respuesta_dos' : 'Ten un ',
        'respuesta_tres' : 'Excelente Dia'

      }, 
      success : function(resp){
         
        $('#mostrar_mensaje').text(resp);
        
      }



    });

  });

});