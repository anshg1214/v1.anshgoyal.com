$(document).ready(function(){
    $(window).scroll(function(){
        if (window.scrollY > 20){
            $('.navbar').addClass("sticky");   
        }
        else{
            $('.navbar').removeClass("sticky");
        }
    });

    var typed = new Typed(".typing", {
        strings: ["Student", "Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    
    var typed = new Typed(".typing-2", {
        strings: ["Student", "Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });




    // const button = document.getElementById("submitButton");
    // const disableButton = () => {
    //     button.value = "Searching..."
    //     button.disabled = true
    // }
      
    // const enableButton = () => {
    //     button.value = "Get recommendations"
    //     button.disabled = false  
    // }


    // function buttontextchange(){
    //     setTimeout(function(){ 
    //         disableButton()
    //     }, 5000);
    //     enableButton();
    //}




});