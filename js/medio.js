/* Fecha reserva */

$('.datepicker.entrada').datepicker({
    startDate: '0d',
    format: 'dd-mm-yyyy',
    todayHighlight: true
});

$('.datepicker.entrada').change(function () {

    var fechaEntrada = $(this).val();

    $('.datepicker.salida').datepicker({
        startDate: fechaEntrada,
        datesDisabled: fechaEntrada,
        format: 'dd-mm-yyyy'
    });
})






/* Boton Menú*/

if (window.matchMedia("(max-width:768px)").matches){

    $(".botonMenu").click(function(){

        $(".menuMovil").slideToggle('fast');
        $(".menuMovil").css({"top":$("header").height()})
        

    })

    $(".menuMovil ul li a").click(function (e){

        $(".menuMovil").slideToggle('fast');
    
        e.preventDefault();
    
        var vinculo = $(this).attr("href");
    
        $("html, body").animate({
    
            scrollTop: $(vinculo).offset().top - 55
            
        }, 1000, "easeInOutBack")
    
    })


}else{

    $(".botonMenu").click(function(){
        $(".menu").slideToggle('fast');
        $(".formReservas").slideUp('fast');
    })

    $(".menu ul li a").click(function (e){

        $(".menu").slideToggle('fast');
    
        e.preventDefault();
    
        var vinculo = $(this).attr("href");
    
        $("html, body").animate({
    
            scrollTop: $(vinculo).offset().top - 60

        }, 1000, "easeInOutBack")
    
    })

}


/* Scroll UP */


$.scrollUp({
    scrollText: "",
    scrollSpeed: 2000,
    easingType: "easeOutQuint"
})

/* Banner Slide */

$('.fade-slider').jdSlider({
    
    isSliding: false,
    isAuto: true,
    isLoop:true,
    isDrag: false,
    interval: 7000,
    isCursor: false,
    speed: 3000
})

$(".verMas").click(function(){

    var vinculo = $(this).attr("vinculo");

    $("html, body").animate({

        scrollTop: $(vinculo).offset().top - 60
    
    }, 1000, "easeInOutBack")
})

$(".banner .fade-slider").css({"margin-top":$("header").height()})

/* Interacción Planes */

$(".planes .grid-item").mouseover(function(){

    $(this).children("figure").css({"height":"25%", "transition":".5s all"})
    
    $(".tituloPlan").html($(this).children("figure").children("h1").html());

    $(".descripcionPlan").html($(this).children("figure").children("h1").attr("descripcion"));


})


$(".planes .grid-item").mouseout(function(){

    $(this).children("figure").css({"height":"100%", "transition":".5s all"})

    $(".tituloPlan").html($(".tituloPlan").attr("tituloPlan"));

    $(".descripcionPlan").html($(".descripcionPlan").attr("descripcionPlan"));
    
})




/*Slide Habitaciones */

$('.slideHabitaciones').jdSlider({

    isSliding:true,
    isAuto:true,
    isLoop:true,
    isDrag:true,
    interval:3000,
    isCursor:false,
    margin:0,
    timingFunction:'ease',
    easing:'swing'

});

/* 360  */

$("#myPano").pano({
    img: "img/img_360/sphere.jpg"
});



/* Posición Bloque Reservas */

function posicionBloqueReservas(){

        if(window.matchMedia("(min-width:769px)").matches){

        if($(".mostrarBloqueReservas").attr("modo") == "abajo"){

            $(".colDerHabitaciones").css({"margin-top":"100px"})
            $(".colDerReservas").css({"margin-top":"100px"})
        }

        if($(".mostrarBloqueReservas").attr("modo") == "arriba"){

             $(".colDerHabitaciones").css({"margin-top":"20px"})
             $(".colDerReservas").css({"margin-top":"20px"})
        }
    }else{
             $(".colDerHabitaciones").css({"margin-top":"20px"})
             $(".colDerReservas").css({"margin-top":"20px"})
    }
}

posicionBloqueReservas();

if(window.matchMedia("(max-width:768px)").matches){

    $(".infoHabitacion .colIzqHabitaciones").css({"margin-top":$("header").height()})
    $(".infoReservas .colIzqReservas").css({"margin-top":$("header").height()})
}


/* Calendario */

