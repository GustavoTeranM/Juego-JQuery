var puntos = 0;
$(function() {
    $(".items").hover(function() {
        // si eitem esta sobre el objeto
        var tis = $(this);
        tis.find(".hueco").click(function() {
            // si hace click dentro del objeto hueco
            if (tis.hasClass("active")) {
                tis.removeClass("active");
                puntos++;
                $("#puntos").html(puntos);
            } else {
                //$("#rr").html("no me atrapas ");
                console.log(":(");
            }
        });
    });
});
var iterval = setInterval(function() {
    topoaleatorio();
}, 1000);

topoaleatorio = function() {
    var num = parseInt(Math.random() * 12); // para hacer numerios aleatorios
    $(".items").removeClass("active"); //para que se esconda elcuy
    $(".items:nth-child(" + num + ")").addClass("active");
};

$(function() {
    $("#draggable").draggable();
});

$(function() {
    $("#resizable").resizable();
});
jQuery(function() {
    $("#desplegable").on("click", function() {
        if ($(".container").is(":visible")) {
            $(".container").hide();
        } else {
            $(".container").show();
        }
    });
});