function dateArea(){
    var dateDay = new Date().getDate();
    var d = new Date();
    var dateMonth = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    var dateName = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    
    document.querySelector(".day").innerHTML=dateDay;
    document.querySelector(".month").innerHTML=dateMonth[d.getMonth()];
    document.querySelector(".day-name").innerHTML=dateName[d.getDay()];
  }
  
  setInterval(dateArea, 1000);
  
  function clockArea(){
    var hoursArea = new Date().getHours();
    var minutesArea = new Date().getMinutes();
    var clockArea = hoursArea + ":" + minutesArea;
    
    if(hoursArea<10){
      var clockArea = "0" + hoursArea + ":" + minutesArea;
    } else if(minutesArea<10){
      var clockArea = hoursArea + ":0" + minutesArea;
    } else{
      var clockArea = hoursArea + ":" + minutesArea;
    }
    document.querySelector(".clock-area").innerHTML = clockArea;
  }
  
  setInterval(clockArea, 1000);
  
  var ntf = document.querySelector(".bell");
  var ntfBell = document.querySelector(".sound");
  var ntfBellSlash = document.querySelector(".quiet");
  var dynamicIsland = document.querySelector(".dynamic-island");
  var bellAnmArea = document.querySelector(".bell-animation-area");
  var bellAnm = document.querySelector(".bell-animation");
  
  ntf.addEventListener("click", function(){
    if(ntfBellSlash.style.display !== "inline"){
      ntfBellSlash.style.display="inline";
      ntfBell.style.display="none";
      bellAnmArea.style.display="block";
      bellAnm.style.display="block";
      document.querySelector(".ntf-1").style.display="inline";
      document.querySelector(".ntf-2").style.display="none";
      setTimeout("bellAnmArea.style.display='none'", 7000);
      setTimeout("bellAnm.style.display='none'", 5000);
      geoIcon.style.visibility="hidden";
      geoIcon.style.opacity="0";
      setTimeout("geoIcon.style.visibility='visible'", 7000);
      setTimeout("geoIcon.style.opacity='1'", 7000);
      document.querySelector(".bi-soundwave").style.opacity="0";
      document.querySelector(".bi-soundwave").style.visibility="hidden";
      setTimeout("document.querySelector('.bi-soundwave').style.visibility='visible'", 7000);
      setTimeout("document.querySelector('.bi-soundwave').style.opacity='1'", 7000);
    }
    
    else {
      ntfBellSlash.style.display="none";
      ntfBell.style.display="inline";
      bellAnmArea.style.display="block";
      bellAnm.style.display="block";
      document.querySelector(".ntf-1").style.display="none";
      document.querySelector(".ntf-2").style.display="inline";
    }
  })
  
  var spotify = document.querySelector(".spotify");
  spotify.addEventListener("click", function(){
    if(document.querySelector(".music-player").style.visibility !== "visible"){
      document.querySelector(".music-player").style.visibility="visible";
      document.querySelector(".spotify").style.color="#1ED760";
      document.querySelector(".music-player").style.marginTop="20px";
      document.querySelector(".music-player").style.opacity="1";
      document.querySelector(".notification").style.display="none";
      document.querySelector(".flash-and-camera").style.display="none";
      fuelArea.style.visibility="hidden";
      fuelArea.style.bottom="100px";
      fuelArea.style.opacity="0";
      fuelWidgetIcon.style.color="white";
    } else{
        document.querySelector(".music-player").style.visibility="hidden";
        document.querySelector(".spotify").style.color="white";
        document.querySelector(".music-player").style.marginTop="0px";
        document.querySelector(".music-player").style.opacity="0";
        document.querySelector(".notification").style.display="block";
        document.querySelector(".flash-and-camera").style.display="block";
    }
  })
  
  var dynamicVolume = document.querySelector(".bi-soundwave");
  dynamicVolume.addEventListener("click", function(){
    if(document.querySelector(".music-player").style.visibility !== "visible"){
      document.querySelector(".music-player").style.visibility="visible";
      document.querySelector(".spotify").style.color="#1ED760";
      document.querySelector(".music-player").style.marginTop="20px";
      document.querySelector(".music-player").style.opacity="1";
      document.querySelector(".notification").style.display="none";
      document.querySelector(".flash-and-camera").style.display="none";
      fuelArea.style.visibility="hidden";
    } else{
        document.querySelector(".music-player").style.visibility="hidden";
        document.querySelector(".spotify").style.color="white";
        document.querySelector(".music-player").style.marginTop="0px";
        document.querySelector(".music-player").style.opacity="0";
        document.querySelector(".notification").style.display="block";
        document.querySelector(".flash-and-camera").style.display="block";
    }
  })
  
  var geoIcon = document.querySelector(".bi-geo-alt-fill");
  var fuelArea = document.querySelector(".fuel-area");
  var fuelWidgetIcon = document.querySelector(".fuelWidgetIcon");
  
  fuelWidgetIcon.addEventListener("click", function(){
    if(fuelArea.style.visibility !== "visible"){
      fuelArea.style.visibility="visible";
      fuelArea.style.opacity="1";
      fuelArea.style.bottom="110px";
      geoIcon.style.right="93px";
      geoIcon.style.visibility="visible";
      geoIcon.style.opacity="1";
      dynamicIsland.style.left="83px";
      document.querySelector(".dynamic-island-camera").style.right="125px";
      document.querySelector(".bi-soundwave").style.left="100px";
      fuelWidgetIcon.style.color="red";
      document.querySelector(".music-player").style.visibility="hidden";
      document.querySelector(".music-player").style.marginTop="0px";
      document.querySelector(".music-player").style.opacity="0";
      document.querySelector(".spotify").style.color="white";
    } else{
      fuelArea.style.visibility="hidden";
      fuelArea.style.opacity="0";
      fuelArea.style.bottom="100px";
      geoIcon.style.right="100px";
      geoIcon.style.visibility="hidden";
      geoIcon.style.opacity="0";
      dynamicIsland.style.left="100px";
      document.querySelector(".dynamic-island-camera").style.right="110px";
      document.querySelector(".bi-soundwave").style.left="120px";
      fuelWidgetIcon.style.color="white";
    }
  })
  
  
  var sarki=document.getElementById("sarki");
  var oynat=document.getElementById("oynat");
  var ses=document.getElementById("ses");
   
  //What to do when you hit the play button
  oynat.onclick=function(){
    if(sarki.paused){
      sarki.play();
      document.querySelector(".bi-pause-fill").style.display="inline";
      document.querySelector(".bi-play-fill").style.display="none";
      document.querySelector(".music-poster").style.transform="scale(1)";
      document.querySelector(".bi-soundwave").style.display="block";
    } else{
      sarki.pause();
      document.querySelector(".bi-pause-fill").style.display="none";
      document.querySelector(".bi-play-fill").style.display="inline";
      document.querySelector(".music-poster").style.transform="scale(.9)";
      document.querySelector(".bi-soundwave").style.display="none";
    }
  }
  
  
  //what to do when range object is changed for audio setting
  /* ses.oninput=function(){
    sarki.volume =ses.value/100;
  }
  */
  
  //Update range object when volume is changed from control
  sarki.onvolumechange=function(){
    ses.value=sarki.volume*100;
  }