var popupStatus = 0;

function loadPopup(contactid) {
    if (popupStatus == 0){
	$("#backgroundPopup").css({
		"opacity": "0.7"
		    });
	$("#backgroundPopup").fadeIn("slow");  
	$(contactid).fadeIn("slow");  
	popupStatus = 1;
    }  
}  

//disabling popup with jQuery magic!
function disablePopup(){
    //disables popup only if it is enabled
    if(popupStatus==1){
	$("#backgroundPopup").fadeOut("slow");
	$("#popupContact").fadeOut("slow");
	popupStatus = 0;
    }
}

//centering popup
function centerPopup(){
    //request data for centering
    var windowWidth = document.documentElement.clientWidth;
    var windowHeight = document.documentElement.clientHeight;
    var popupHeight = $("#popupContact").height();
    var popupWidth = $("#popupContact").width();
    //centering
    $("#popupContact").css({
	    "position": "absolute",
		"top": windowHeight/2-popupHeight/2,
		"left": windowWidth/2-popupWidth/2
		});
    //only need force for IE6

    $("#backgroundPopup").css({
	    "height": windowHeight
		});

}

function changePopupText(button){
    var title;
    var text;
    if (button == "clients"){
	title = "Clients";
	text = "info about clients";
    }
    else if (button == "bio") {
	title = "Bio";
	text = "info about your Bio";
    }
    else if (button == "contact") {
	title = "Contact";
	text = "info about your Contact";
    }
    document.getElementById("contactAreaTitle").innerHTML = title;
    document.getElementById("contactAreaText").innerHTML = text;
}

//LOADING POPUP
//Click the button event!
$(document).ready(function(){
$("#bioButton").click(function(){
	//centering with css
	centerPopup();
	//load popup
	loadPopup("#popupContact");
    });
$("#contactButton").click(function(){
	//centering with css
	centerPopup();
	//load popup
	loadPopup("#popupContact");
    });
$("#clientButton").click(function(){
	//centering with css
	centerPopup();
	//load popup
	loadPopup("#popupContact");
    });



//CLOSING POPUP
//Click the x event!
$("#popupContactClose").click(function(){
	disablePopup();
    });
//Click out event!
$("#backgroundPopup").click(function(){
	disablePopup();
    });
//Press Escape event!


    });