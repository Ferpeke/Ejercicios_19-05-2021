$(document).ready(function(){
  $('#btn_mostrar').click(function(){
    $.ajax({
      type : 'POST', 
      url: './control/control.php', 
      data : {
        'saludo' : 'Hola Compañeros.!!'
      }, 
      success: function(resp){
        
        $('#mostrar_saludo').text(resp);
      
      }
    });


  });
});