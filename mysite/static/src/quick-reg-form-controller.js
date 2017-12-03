$(document).ready(function(){
    if (Cookies.get('quick_order')=='enable') {
        $(".form_for_order_without_registration").hide();
    }

    $(".form_for_order_without_registration").submit(function(event){
  			 event.preventDefault();
         // Reseting the validator variables
         var validFirstName = false;
         var validSecondName = false;
         var validEmail = false;
         var validAdrress = false;
        // Get data from form of quick registration form
         var first_name    = $("input[name='first_name' ]").val();
         var second_name   = $("input[name='second_name']").val();
         var e_mail        = $("input[name='e-mail']").val();
         var adrress       = $("input[name='adrress']").val();
         //regular expression for check e-mail
         var regForMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/;
         // FUNCTION ValidatorForm (expression_for_validation, Id_ObjectCurrentField, Class_CurrentWrapperField )
         validName       = ValidatorForm ( first_name === "", "#first_name",  ".nameBlock" );
         validSecondName = ValidatorForm ( second_name === "", "#second_name", ".secondNameBlock" );
         validEmail      = ValidatorForm ( e_mail === "" || !regForMail.test(e_mail), "#e-mail", ".mailBlock" );
         validAdrress    = ValidatorForm ( adrress === "", "#adrress", ".adrressBlock" );
         // Cheking All Field of Form
         if(validName && validSecondName && validEmail && validAdrress ) {
              var note_for_user = first_name+" "+second_name+" , вашы регистрационные данные внесены в систему";
              alert(note_for_user);
              $(".form_for_order_without_registration").hide(800);
              //Set Cookies After Secces Filling
              Cookies.set('quick_order' , 'enable' );
              Cookies.set('quick_order_bayer_fname',first_name );
              Cookies.set('quick_order_bayer_sname', second_name);
              Cookies.set('quick_order_e-mail' , e_mail );
              Cookies.set('quick_order_adrress' , adrress );
              pause( 800 );
              //Activate Button For Sending Data to Server
         			$("form").unbind('submit').submit();
          }
     });
});

function ValidatorForm ( expression,Id_ObjectCurrentField,Class_CurrentWrapperField   ){
  if (expression)  return ChangeFieldAsSeccesFilled (Id_ObjectCurrentField,Class_CurrentWrapperField);
             else  return ChangeFieldAsErrorFilled (Id_ObjectCurrentField,Class_CurrentWrapperField);
}

function ChangeFieldAsSeccesFilled ( Id_ObjectCurrentField , Class_CurrentWrapperField  ){
  $(Id_ObjectCurrentField).parent().removeClass("has-success").addClass("has-error");
  $(Class_CurrentWrapperField ).append("<span class='glyphicon glyphicon-remove form-control-feedback' aria-hidden='true'></span>");
  $(Class_CurrentWrapperField + " .glyphicon-ok").remove();
  return false;
}

function ChangeFieldAsErrorFilled  ( Id_ObjectCurrentField , Class_CurrentWrapperField  ){
  $(Id_ObjectCurrentField).parent().removeClass("has-error").addClass("has-success");
  $(Class_CurrentWrapperField ).append("<span class='glyphicon glyphicon-ok form-control-feedback' aria-hidden='true'></span>");
  $(Class_CurrentWrapperField +" .glyphicon-remove").remove();
  return true;
}
