/* ==========================================================================
   main.js
   ========================================================================== */
var $j = jQuery.noConflict();

$j(function() {

    var dials1 = $j('[id$=dials1] ol li');
    var dials2 = $j('[id$=dials2] ol li');
    var index;
    var number1 = $j('[id$=number1]');
    var number2 = $j('[id$=number2]');
    var total;

    dials1.click(function() {

        index = dials1.index(this);

        if (index == 9) {

            number1.append("*");

        } else if (index == 10) {

            number1.append("0");

        } else if (index == 11) {

            number1.append("#");

        } else if (index == 12) {

            number1.empty();

        } else if (index == 13) {

            total = number1.text();
            total = total.slice(0, -1);
            number1.empty().append(total);

        } else if (index == 14) {

            //add any call action here

        } else { number1.append(index + 1); }
    });

    dials2.click(function() {

        index = dials2.index(this);

        if (index == 9) {

            number2.append("*");

        } else if (index == 10) {

            number2.append("0");

        } else if (index == 11) {

            number2.append("#");

        } else if (index == 12) {

            number2.empty();

        } else if (index == 13) {

            total = number2.text();
            total = total.slice(0, -1);
            number2.empty().append(total);

        } else if (index == 14) {

            //add any call action here

        } else { number2.append(index + 1); }
    });


    $j(document).keydown(function(e) {

        switch (e.which) {

            case 96:

                number.append("0");
                break;

            case 97:

                number.append("1");
                break;

            case 98:

                number.append("2");
                break;

            case 99:

                number.append("3");
                break;

            case 100:

                number.append("4");
                break;

            case 101:

                number.append("5");
                break;

            case 102:

                number.append("6");
                break;

            case 103:

                number.append("7");
                break;

            case 104:

                number.append("8");
                break;

            case 105:

                number.append("9");
                break;

            case 8:

                total = number.text();
                total = total.slice(0, -1);
                number.empty().append(total);
                break;

            case 27:

                number.empty();
                break;

            case 106:

                number.append("*");
                break;

            case 35:

                number.append("#");
                break;

            case 13:

                $('.pad-action').click();
                break;

            default:
                return;
        }

        e.preventDefault();
    });
});


// Modal section normal

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// Modal section phone 1

// Get the modal
var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var modal4 = document.getElementById("myModal4");
var modal5 = document.getElementById("myModal5");
var modal_1 = document.getElementById("myModal_1");
// Get the button that opens the modal
var btn1 = document.getElementById("myBtn1");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close")[2];

var btn1_submit = document.getElementById("Submit_btn1");

var ussd_code = document.getElementById("number2").innerText;

//if(ussd_code == "*120*122600#"){

    // When the user clicks the button, open the modal 
    btn1.onclick = function() {
        modal1.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span1.onclick = function() {
        modal1.style.display = "none";
    }

    btn1_submit.onclick = function() {
        modal1.style.display = "none";
        modal2.style.display = "block";
    }


    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
            if (event.target == modal1) {
                modal1.style.display = "none";
            }
        }

//}
    // End of modal sectiion

// Modal section phone 1 - 2

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close")[4];

var btn2_submit = document.getElementById("Submit_btn2");



// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
    modal2.style.display = "none";
}

btn2_submit.onclick = function() {
    modal2.style.display = "none";
    modal3.style.display = "block";
}


var user_id = document.getElementById("textbox2").value;
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}

// Modal section phone 1 - 3

// Get the <span> element that closes the modal
var span3 = document.getElementsByClassName("close")[5];

var btn3_submit = document.getElementById("Submit_btn3");



// When the user clicks on <span> (x), close the modal
span3.onclick = function() {
    modal3.style.display = "none";
}

btn3_submit.onclick = function() {
    modal3.style.display = "none";
    modal4.style.display = "block";
}


var user_id = document.getElementById("textbox3").value;
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
}

// Modal section phone 1 - 4

// Get the <span> element that closes the modal
var span4 = document.getElementsByClassName("close")[6];

var btn4_submit = document.getElementById("Submit_btn4");



// When the user clicks on <span> (x), close the modal
span4.onclick = function() {
    modal4.style.display = "none";
}

btn4_submit.onclick = function() {
    modal4.style.display = "none";
    if (document.getElementById("textbox4").value == 1){
    modal5.style.display = "block";
    }
}


var user_id = document.getElementById("textbox4").value;
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal2) {
        modal4.style.display = "none";
    }
}

// Modal section phone 1 - 5
var span5 = document.getElementsByClassName("close")[7];

var btn5_submit = document.getElementById("Submit_btn5");



// When the user clicks on <span> (x), close the modal
span5.onclick = function() {
    modal5.style.display = "none";
}

btn5_submit.onclick = (function() {
   if (document.getElementById("textbox5").value == 1){
       modal.style.display = "block";
   }
    
    modal5.style.display = "none";
    //modal6.style.display = "block";
});


var user_confirm_password = document.getElementById("pass_confirm1").value;
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal5) {
        modal5.style.display = "none";
    }
}


//Confirmation of sim swap

// Modal section phone 0 - 2
//var span5 = document.getElementsByClassName("close")[7];

var p2_btn2_submit = document.getElementById("Submit_confirm");



// When the user clicks on <span> (x), close the modal
span5.onclick = function() {
    modal5.style.display = "none";
}

btn5_submit.onclick = (function() {
   if (document.getElementById("textbox5").value == 1){
       modal.style.display = "block";
   }
    
    modal5.style.display = "none";
    //modal6.style.display = "block";
});


var user_confirm_password = document.getElementById("pass_confirm1").value;
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal5) {
        modal5.style.display = "none";
    }
}



//Get PUSH MODAL:
var modal_2 = document.getElementById("myModal_2");
var modal_3 = document.getElementById("myModal_3");

//What happens when a push notificcation is instantiated:
var user_pass = document.getElementById("password").value;

//What happens after a login occurs:


// Possible routes for pop up:



// End of modal sectiion
/*
$(document).ready(function(){
	
 	$("body").on("click","#btn",function(){
  	  	
    	$("#myModal").modal("show");
        
    	$(".blue").addClass("after_modal_appended");
    
    	//appending modal background inside the blue div
    	$('.modal-backdrop').appendTo('.blue');   
    
    	//remove the padding right and modal-open class from the body tag which bootstrap adds when a modal is shown
    
    	$('body').removeClass("modal-open")
   	 	$('body').css("padding-right","");     
  });

}); */