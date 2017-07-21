$( document ).ready(function() {

   function swapElement(){
        var element1 = document.getElementById("mascot");
        var str = '<img class="col-md-8 col-md-offset-2 text-center col-sm-10 col-sm-offset-1 text-center col-xs-10 col-xs-offset-1 text-center" id="mascot" src="Images/lotus-340r.jpg"  alt="Amazing Cars for Enthusiast Drivers"></img>';
        if(element1.outerHTML) {
            element1.outerHTML = str;
        } else {
            var tmpElement1 = document.createElement("img");
            tmpElement1.setAttribute("class", "col-md-8 col-md-offset-2 text-center col-sm-10 col-sm-offset-1 text-center col-xs-10 col-xs-offset-1 text-center");
            tmpElement1.setAttribute("id", "mascot");
            tmpElement1.setAttribute("src", "Images/lotus-340r.jpg");
            element1Parent=element1.parentNode;
            element1Parent.replaceChild(tmpElement1, element1);
        }
   }
    // timer to swap after video playes for 1:54
    setTimeout(swapElement(), 110000);
    

});