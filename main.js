var myType     = document.getElementById("type"),
    myBtn      = document.getElementsByClassName("give"),
    clear      = document.getElementById("clear"),
    equal      = document.getElementById("eq"),
    del        = document.getElementById("del1"),
    num        = document.getElementById("test"),
    i;
     

for (i = 0; i < myBtn.length; i++) {
    
    myBtn[i].onclick = function () {
        
    "use strict";
        
    myType.value += this.value;
        
    }
}


equal.onclick = function () {
     
    if(myType.value == "") {
            
            myType.placeholder = "Enter Any Number"
            
        } else {
            myType.value = eval(myType.value);
        }
}
clear.onclick = function del() {

    "use strict";
    
    myType.value = "";
    
}
del.onclick = function () {
    
    "use strict";
    
    myType.value = myType.value.substring(0,myType.value.length-1);
    
}

document.onkeydown = function (event) {
    
    "use strict";
    
    var click1 = event.keyCode,
        click2 = String.fromCharCode(event.keyCode);
    
    if(click1 === 187) {
        
        if(myType.value == "") {
            
            myType.placeholder = "Enter Any Number"
            
        } else {
            myType.value = eval(myType.value);
        }
        
    }
    else if(click1 === 8) {
        
        myType.value = myType.value.substring(0,myType.value.length-1);
        
    }
}
