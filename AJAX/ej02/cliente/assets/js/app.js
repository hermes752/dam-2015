$(function() {


    var $provincias = $('#provincias');
    var $municipios = $('#municipios');



    $.getJSON('../servidor/cargaProvinciasJSON.php', null, function(provincias) {
        


        var options = [];
        options.push(new Option('Selecciona una provincia', null));
        for (var cp in provincias) {
            options.push(new Option(provincias[cp], cp));


        }
        $provincias.append(options);

        $provincias.on('change', function(e) {
            var cp = $provincias.val();
            $.getJSON('../servidor/cargaMunicipiosJSON.php', {
                method: 'POST',
                data: {
                    provincias: cp


                },
                dataType: 'json',
                success: function(municipios) {
                    console.log(municipios);
                }

            });

        });

    });




});

