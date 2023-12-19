$(document).ready(function () {
    $("#datepicker").datepicker();
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
