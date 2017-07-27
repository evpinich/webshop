if (Cookies.get('quick_order')=='enable') {
   $(".form_for_order_without_registration").hide();
}


$(document).ready(function(){
    $(".form_for_order_without_registration").submit(function(event){
  			 event.preventDefault();

         // обнуляем переменные вылидатора
         var validFirstName = false;
         var validSecondName = false;
         var validEmail = false;
         var validAdrress = false;



         var first_name    = $("input[name='first_name' ]").val();
         var second_name   = $("input[name='second_name']").val();
         var e_mail        = $("input[name='e-mail']").val();
         var adrress       = $("input[name='adrress']").val();

         var regForMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/;

         if( first_name == "") {
         				$("#first_name").parent().removeClass("has-success").addClass("has-error");
         				$(".nameBlock").append("<span class='glyphicon glyphicon-remove form-control-feedback' aria-hidden='true'></span>");
         				$(".nameBlock .glyphicon-ok").remove();
         				validName = false;
         			} else {
         				$("#first_name").parent().removeClass("has-error").addClass("has-success");
         				$(".nameBlock").append("<span class='glyphicon glyphicon-ok form-control-feedback' aria-hidden='true'></span>");
         				$(".nameBlock .glyphicon-remove").remove();
         				validName = true;
         			}
          if( second_name == "") {
                 $("#second_name").parent().removeClass("has-success").addClass("has-error");
                 $(".secondNameBlock").append("<span class='glyphicon glyphicon-remove form-control-feedback' aria-hidden='true'></span>");
                 $(".secondNameBlock .glyphicon-ok").remove();
                 validSecondName = false;
               } else {
                 $("#second_name").parent().removeClass("has-error").addClass("has-success");
                 $(".secondNameBlock").append("<span class='glyphicon glyphicon-ok form-control-feedback' aria-hidden='true'></span>");
                 $(".secondNameBlock .glyphicon-remove").remove();
                 validSecondName = true;
               }
           if( e_mail == "" || !regForMail.test(e_mail)) {
                  $("#e-mail").parent().removeClass("has-success").addClass("has-error");
                  $(".mailBlock").append("<span class='glyphicon glyphicon-remove form-control-feedback' aria-hidden='true'></span>");
                  $(".mailBlock .glyphicon-ok").remove();
                  validEmail = false;
                } else {
                  $("#e-mail").parent().removeClass("has-error").addClass("has-success");
                  $(".mailBlock").append("<span class='glyphicon glyphicon-ok form-control-feedback' aria-hidden='true'></span>");
                  $(".mailBlock .glyphicon-remove").remove();
                  validEmail = true;
                }
            if( adrress == "") {
                   $("#adrress").parent().removeClass("has-success").addClass("has-error");
                   $(".adrressBlock").append("<span class='glyphicon glyphicon-remove form-control-feedback' aria-hidden='true'></span>");
                   $(".adrressBlock .glyphicon-ok").remove();
                   validAdrress = false;
                 } else {
                   $("#adrress").parent().removeClass("has-error").addClass("has-success");
                   $(".adrressBlock").append("<span class='glyphicon glyphicon-ok form-control-feedback' aria-hidden='true'></span>");
                   $(".adrressBlock .glyphicon-remove").remove();
                   validAdrress = true;
                 }



             if(validName == true && validSecondName == true && validEmail == true && validAdrress == true) {
                      var note_for_user = first_name+" "+second_name+" , вашы регистрационные данные внесены в систему";

                      alert(note_for_user);

                      $(".form_for_order_without_registration").hide(800);

                      Cookies.set('quick_order' , 'enable' );
                      Cookies.set('quick_order_bayer_fname',first_name );
                      Cookies.set('quick_order_bayer_sname', second_name);
                      Cookies.set('quick_order_e-mail' , e_mail );
                      Cookies.set('quick_order_adrress' , adrress );

                      pause( 800 );

                 			$("form").unbind('submit').submit();
                 			}




     });

});
