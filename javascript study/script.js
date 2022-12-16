function tabs(value){
    opacity:0
    if(value==3){
        document.getElementById("customlink").href="https://www.facebook.com/";
        document.getElementById("showItem").style.backgroundColor="#003049";
        document.getElementById("showitemaccess").innerHTML="This is block 3";
        document.getAnimations("showItem").style.transition="all 2s";
       
    }
    else if(value==2){
        document.getElementById("customlink").href="https://www.youtube.com/watch?v=4JEdz1eA2vQ";
        document.getElementById("showItem").style.backgroundColor="#D62828";
        document.getElementById("showitemaccess").innerHTML="This is block 2";
        document.getAnimations("showItem").style.transition="all 2s";
    }

    else if(value==1){
        document.getElementById("customlink").href="https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp";
        document.getElementById("showItem").style.backgroundColor="#EAE2B7";
        document.getElementById("showitemaccess").innerHTML="This is block 1";
        document.getAnimations("showItem").style.transition="all 2s";
    }
      
    
}