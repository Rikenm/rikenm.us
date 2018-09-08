$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
});

$(document).ready(function(){
    $("#flip2").click(function(){
        $("#panel2").slideToggle("slow");
    });
});


$(document).ready(setTimeout(function(){
    
    $("#notification").animate({top: '10%'});
     setTimeout(function() {
      $("#notification").fadeOut().empty();
    }, 5000);

},500));



// $("button").click(function(){
//     $("div").animate({left: '250px'});
// });