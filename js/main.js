$(document).mousemove(function(event){
   $(".licznik").text("X: " + event.pageX + ", Y: " + event.pageY +" szerokosc okna "+ $('#two').width());
   var windowWidth = $(window).width();
   var kursor = event.pageX;
   var procent = (kursor/windowWidth);
   var procent2 = Math.abs((2*kursor/windowWidth)-1)*15;

   console.log (procent2);

   $('#two').css("width", 600*procent);

   if ( kursor > (windowWidth/2)){
     $('.box').css("margin-left", -300 - procent2  )
   }else{
     $('.box').css("margin-left", -300 + procent2 )
   }




  });
