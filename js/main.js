$(document).mousemove(function(event){
   $(".licznik").text("X: " + event.pageX + ", Y: " + event.pageY +" szerokosc okna "+ $('#two').width());
   var windowWidth = $(window).width();
   var kursor = event.pageX;
   var procent = (kursor/windowWidth);
   console.log(procent);
   if (procent>0){
     $('#two').css("width", 600*procent);
   }

  });
