//TEMA COOCKIES
function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
  
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

function checkCookie(nombreCookie){
  var valor=getCookie(nombreCookie);
  if (valor !== 0) {
      valor++;
      setCookie(nombreCookie,valor,30);
  } else {
      document.cookie= nombreCookie + "=1; SameSite=Lax; Secure ";
  }
}


//TEMA INTERACTIVIDAD
var vid = document.getElementById("videopresentacio");
                        
vid.ontimeupdate = function() {

  var btn1 = document.getElementById("boton1");
  var btn2 = document.getElementById("boton2");

  //per las proves del temps
  //document.getElementById("demo").innerHTML = vid.currentTime;

  //primer if que va a quien soy
  if(vid.currentTime >= 2.4 &&  vid.currentTime <= 2.6){
    //pausamos video
    vid.pause();
    
    //cambiamos informacion de los botones
    document.getElementById("textoinformativo").innerHTML = "Wait a moment, do you want to continue watching the video or go directly to see it on my page?";
    document.getElementById("botonesvideo").style.display = "inherit";
    document.getElementById("boton1").innerHTML = "Go ahead!!";
    document.getElementById("boton2").innerHTML = "Keep watching ^^";

    //redirigir el boto
    btn1.setAttribute('href', "#idabout");

    //despres de fer click hide el modal 
    btn1.onclick = modalfora;
    btn2.onclick = seguir;

  }else{

    //anar a skills
    if(vid.currentTime >=22 && vid.currentTime <= 22.3){
      //pausamos video
      vid.pause();

      //cambiamos informacion de los botones
      document.getElementById("textoinformativo").innerHTML = "Still here? OKEY! Do you want to go directly to SKILLS or continue watching it?";
      document.getElementById("botonesvideo").style.display = "inherit";
      document.getElementById("boton1").innerHTML = "Go to Skills!";
      document.getElementById("boton2").innerHTML = "Keep watching ^^";

      //redirigir el boto
      btn1.setAttribute('href', "#idskills");

      //despres de fer click hide el modal 
      btn1.onclick = modalfora;
      btn2.onclick = seguir;
      
    }else{

      //anar a projectes
      if(vid.currentTime >=71.1 && vid.currentTime <= 71.4){
        //pausamos video
        vid.pause();

        //cambiamos informacion de los botones
        document.getElementById("textoinformativo").innerHTML = "Now do you want to see my projects or continue watching the video?";
        document.getElementById("botonesvideo").style.display = "inherit";
        document.getElementById("boton1").innerHTML = "Go to Projects!";
        document.getElementById("boton2").innerHTML = "Keep watching ^^";

        //redirigir el boto
        btn1.setAttribute('href', "#idproject");

        //despres de fer click hide el modal 
        btn1.onclick = modalfora;
        btn2.onclick = seguir;
      }else{

        //anar a contacta
        if(vid.currentTime >=97.1 && vid.currentTime <= 97.4){
          //pausamos video
          vid.pause();

          //cambiamos informacion de los botones
          document.getElementById("textoinformativo").innerHTML = "Finally, do you want to tell me something to finish the video?";
          document.getElementById("botonesvideo").style.display = "inherit";
          document.getElementById("boton1").innerHTML = "CONTACT ME!";
          document.getElementById("boton2").innerHTML = "Finish watching ^^";

          //redirigir el boto
          btn1.setAttribute('href', "#idcontact");

          //despres de fer click hide el modal 
          btn1.onclick = modalfora;
          btn2.onclick = seguir;
        }
      }
    }
  }
  

    
};

//funcion para darle play al video y esconder el "modal"
function seguir(){
  vid.play();
  document.getElementById("videopresentacio").focus();
  document.getElementById("botonesvideo").style.display = "none";
}

//funcion para esconder "modal"
function modalfora(){
  document.getElementById("botonesvideo").style.display = "none";
}