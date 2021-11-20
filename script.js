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

    $(".barsmenu").click(function(){
        $(".navbar .menu").toggleClass("active");
    })


    $('#sendmessage').submit(function (e){
        e.preventDefault();
        $("form").trigger("reset");
        $("#submitButton").text(function(i, origText){
            return " Message Sent";
          });
        
        setTimeout(function(){
            $("#submitButton").text(function(i, origText){
                return "Send";
              });}, 3000
        );


    });
});