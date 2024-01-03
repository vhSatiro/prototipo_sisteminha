$(document).ready(function () {
    $(".container-result").hide();
    $("#datepicker").datepicker();
    $("#contact-submit").click(function(event){
        $(".container").hide();
        $(".container-result").show();
        var templateString = "Template gerado como exemplo da geração de um documento.<br><br> A data selecionada foi " + $("#datepicker").val() + ".<br>O planner selecionado foi " + $("#planner").val() + ".<br>O banker selecionado foi " + $("#bankers option:selected" ).text() + ".<br>O head selecionado foi " + $("#heads option:selected" ).text() + ".<br>O segmento selecionado foi " + $("#segmentos option:selected" ).text() + ".<br>A carteira selecionada foi " + $("#carteiras option:selected" ).text() + ".<br>A composição familiar preenchida foi: " + $("#composicao_familiar").val() + ".<br>O tema selecionado foi " + $("#temas option:selected" ).text() + ".<br>A ementa selecionada foi " + $("#ementas").val() + ".<br>E os próximos passos são: " + $("#passos").val() +"." ;
        $(".container-result p").html(templateString);
    });
    $("#bankers").change(function (event) {
        var option = $(this).val();
        switch (option) {
            case 'guilherme':
                $("#heads").val('guilherme_head');
                $("#segmentos").val('guilherme_seg');
                for (var i = 1; i < 6; i++) {
                    $("#carteiras option[value=cart_" + i + "]").text("Guilherme - Carteira " + i);
                }
                break;
            case 'ricardo':
                $("#heads").val('ricardo_head');
                $("#segmentos").val('ricardo_seg');
                for (var i = 1; i < 6; i++) {
                    $("#carteiras option[value=cart_" + i + "]").text("Ricardo - Carteira " + i);
                }
                break;
            case 'julia':
                $("#heads").val('julia_head');
                $("#segmentos").val('julia_seg');
                for (var i = 1; i < 6; i++) {
                    $("#carteiras option[value=cart_" + i + "]").text("Julia - Carteira " + i);
                }
                break;
            case 'gabriela':
                $("#heads").val('gabriela_head');
                $("#segmentos").val('gabriela_seg');
                for (var i = 1; i < 6; i++) {
                    $("#carteiras option[value=cart_" + i + "]").text("Gabriela - Carteira " + i);
                }
                break;
            case 'fabio':
                $("#heads").val('fabio_head');
                $("#segmentos").val('fabio_seg');
                for (var i = 1; i < 6; i++) {
                    $("#carteiras option[value=cart_" + i + "]").text("Fabio - Carteira " + i);
                }
                break;
        }
    });
    $("#bankers").change();

});
