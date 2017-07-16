

if (Cookies.get('quick_order')=='enable') {
  $(".form_for_order_without_registration").hide();
}
else{
    $("#button_for_quick_order").click(
      function()
        {
          // TODO: valivator of form_for_order_without_registration

          var first_name    = $("input[name='first_name' ]").val();
          var second_name   = $("input[name='second_name']").val();
          var e_mail        = $("input[name='e-mail']").val();
          var adrress       = $("input[name='adrress']").val();

          var note_for_user = first_name+" "+second_name+" , вашы регистрационные данные внесены в систему";

          alert(note_for_user);

          $(".form_for_order_without_registration").hide(800);

          Cookies.set('quick_order' , 'enable' );
          Cookies.set('quick_order_bayer_fname',first_name  );
          Cookies.set('quick_order_bayer_sname', second_name);
          Cookies.set('quick_order_e-mail' , e_mail );
         }
      );
}
