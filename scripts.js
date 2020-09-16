$(document).ready(function(){

    var tipoPuntaje = 0;
    var score_j1 = 0; score_j2 = 0;
    var j1 = "j1", j2 = "j2"
    var nombg = "";
    
    $(".menu").show();
    $(".tablero").hide();
    
    $("#lblEquipo1").on("focus", function() {
        $("#lblEquipo1").attr("value", "");
    })
    $("#lblEquipo1").on("blur", function() {
        $("#lbl2_Equipo1").text(this.value);
        nombg = $("#lbl2_Equipo1").text();
    })

    $("#lblEquipo2").on("focus", function() {
        $("#lblEquipo2").attr("value", "");
    })
    $("#lblEquipo2").on("blur", function() {
        $("#lbl2_Equipo2").text(this.value);
        nombg = $("#lbl2_Equipo1").text();
    })

    $("#selA24").on("click", function() {
        tipoPuntaje = 24;
        console.log(tipoPuntaje);
        $("#lbl_TipoJuego").html("Jugar a "+tipoPuntaje+" puntos");
        $("#selA24").css("border", "5px solid white").css("background-color", "#3f81b2").css("color", "white");
        $("#selA30").css("background-color", "gray").css("color", "darkgray").css("border", "0");
    });
    $("#selA30").on("click", function() {
        tipoPuntaje = 30;
        $("#lbl2_Equipo1").attr("value", "nombEq1");
        console.log(tipoPuntaje);
        $("#lbl_TipoJuego").html("Jugar a "+tipoPuntaje+" puntos");
        $("#selA30").css("border", "5px solid white").css("background-color", "#3f81b2").css("color", "white");
        $("#selA24").css("background-color", "gray").css("color", "darkgray").css("border", "0");
    });

    //function (sumar)
    $("#btn_Inc_1").on("mouseover", function(){
        $("#btn_Inc_1").css("background-color", "yellow")
    })
    $("#btn_Inc_1").on("mouseout", function(){
        $("#btn_Inc_1").css("background-color", "white")
    })
 
    $("#btn_Inc_2").on("mouseover", function(){
        $("#btn_Inc_2").css("background-color", "yellow")
    })
    $("#btn_Inc_2").on("mouseout", function(){
        $("#btn_Inc_2").css("background-color", "white")
    })
 
    $("#btn_Res_1").on("mouseover", function(){
        $("#btn_Res_1").css("background-color", "yellow")
    })
    $("#btn_Res_1").on("mouseout", function(){
        $("#btn_Res_1").css("background-color", "white")
    })
    
    $("#btn_Res_2").on("mouseover", function(){
        $("#btn_Res_2").css("background-color", "yellow")
    })
    $("#btn_Res_2").on("mouseout", function(){
        $("#btn_Res_2").css("background-color", "white")
    })

    $("#btn_Inc_1").on("click",function(){
        score_j1++;
        if (score_j1 >= tipoPuntaje) {
            score_j1 = tipoPuntaje;
            $("#lbl_score_j1").text(tipoPuntaje);
            nombg = $("#lbl2_Equipo1").text();
            ganador(nombg);
        } else {
            $("#lbl_score_j1").html(score_j1);
            console.log(score_j1);
        }
        dibPuntaje(j1,score_j1);
    });
    
    $("#btn_Inc_2").on('click', function(){
        score_j2++;
        if (score_j2 >= tipoPuntaje) {
            score_j2 = tipoPuntaje;
            $("#lbl_score_j2").text(tipoPuntaje);
            nombg = $("#lbl2_Equipo2").text();
            ganador(nombg);
        } else {
            $("#lbl_score_j2").html(score_j2);
            console.log(score_j2);
        }
        dibPuntaje(j2,score_j2);
    });

    //function (restar)
    $("#btn_Res_1").on('click', function(){
        score_j1--;
        if (score_j1 <= 0) {
            score_j1 = 0;
            $("#lbl_score_j1").html(score_j1);
        } else {
            $("#lbl_score_j1").html(score_j1);
            console.log(score_j1);
        }
        dibPuntaje(j1,score_j1);
    });

    $("#btn_Res_2").on('click', function(){
        score_j2--;
        if (score_j2 <= 0) {
            score_j2 = 0;
            $("#lbl_score_j2").html(score_j2);
        } else {
            $("#lbl_score_j2").html(score_j2);
            console.log(score_j2);
        }
        dibPuntaje(j2,score_j2);
    });

    $("#btnInicio").on("click", function() {
        if (tipoPuntaje !=0) {
        $(".menu").hide();
        $(".tablero").show();
    } else {
        alert("Debe seleccionar un modo de juego");
    }    
    })
 
    //function (finalizar)
    $("#btn_fin").on('click', function() {
        $(".tablero").hide();
        $(".menu").show();
        score_j1 = 0;
        score_j2 = 0;
        $("img").attr("src", "img/0.png");
        $(".imglogo").attr("src", "img/Logo.png");
        $("#lbl_score_j1").html(score_j1);
        $("#lbl_score_j2").html(score_j2);
        $("#lblEquipo1").val("Equipo 1");
        $("#lblEquipo2").val("Equipo 2");
        $("#lbl2_Equipo1").text("Equipo 1");
        $("#lbl2_Equipo2").text("Equipo 2");
        $("#lbl_TipoJuego").text("");
    });

    function ganador(ng) {
        $("#lbl_TipoJuego").html(ng + " ha ganado!");
    }

    function dibPuntaje(n,score) {
        for (i=0; i <= score; i++) {
            if (i <= 5) {
                $("#imgln1_"+n+"_1").attr("src", "img/" + i +".png");
            }
            if (i >=5 && i <= 10) {
                $("#imgln1_"+n+"_2").attr("src", "img/" + (i-5) +".png");
            }
            if (tipoPuntaje == 30) {
                if (i >=10 && i <= 15) {
                    $("#imgln1_"+n+"_3").attr("src", "img/" + (i-10) +".png");
                }
                if (i >=15 && i <= 20) {
                    $("#imgln2_"+n+"_1").attr("src", "img/" + (i-15) +".png");
                }
                if (i >=20 && i <= 25) {
                    $("#imgln2_"+n+"_2").attr("src", "img/" + (i-20) +".png");
                }
                if (i >=25 && i <= 30) {
                    $("#imgln2_"+n+"_3").attr("src", "img/" + (i-25) +".png");
                }    
            } else {
                if (i >=10 && i <= 12) {
                    $("#imgln1_"+n+"_3").attr("src", "img/" + (i-10) +".png");
                }
                if (i >=12 && i <= 17) {
                    $("#imgln2_"+n+"_1").attr("src", "img/" + (i-12) +".png");
                }
                if (i >=17 && i <= 22) {
                    $("#imgln2_"+n+"_2").attr("src", "img/" + (i-17) +".png");
                }
                if (i >=22 && i <= 24) {
                    $("#imgln2_"+n+"_3").attr("src", "img/" + (i-22) +".png");
                } 
            }

        }
    }
});