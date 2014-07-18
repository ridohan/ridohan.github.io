$(document).ready(function(){
    $(".bugdroid .rightArm").click(function(){
        sayHello();
    });

    $("#blink").click(function(){
        blinkEyes();
    });

    $("#antenna").click(function(){
         antennaHappy();
    });

    $("#head").click(function(){
        laugh();
    });


    $("#walk").click(function(){
        $(".bugdroid .leftFoot").removeClass("walkAnimated");
        $(".bugdroid .rightFoot").removeClass("walkAnimated");
        setTimeout(function(){
            $(".bugdroid .leftFoot").addClass("walkAnimated");
            $(".bugdroid .rightFoot").addClass("walkAnimated");
        },10);
    });


    function blinkEyes() {
        $(".bugdroid .head .eye").removeClass("animated");
        setTimeout(function(){$(".bugdroid .head .eye").addClass("animated");},10);
    }

    function sayHello() {
        $(".bugdroid .rightArm").removeClass("animated");
        setTimeout(function(){$(".bugdroid .rightArm").addClass("animated");},10);
    }

    function antennaHappy() {
        $(".bugdroid .head .antenna").removeClass("animated");
        setTimeout(function(){$(".bugdroid .head .antenna").addClass("animated");},10);
    }

    function laugh() {
        $(".bugdroid .head").removeClass("animated");
        setTimeout(function(){$(".bugdroid .head").addClass("animated");},10);
    }

    setInterval(function(){
        sayHello();
    },10000);
    (function loop() {
        var rand = Math.round(Math.random() * (5000 - 500)) + 500;
        setTimeout(function() {
            switch(Math.floor((Math.random()*10)+1)){
                case 0 :
                    blinkEyes();
                    break;
                case 1 :
                    blinkEyes();
                    break;
                case 2 :
                    blinkEyes();
                    break;
                case 3 :
                    blinkEyes();
                    break;
                case 4 :
                    antennaHappy();
                    break;
                case 5 :
                    antennaHappy();
                    break;
                case 6 :
                    antennaHappy();
                    break;
                case 7 :
                    antennaHappy();
                    break;
                case 8 :
                    antennaHappy();
                    break;
                case 9 :
                    laugh();
                    break;
                case 10 :
                    laugh();
                    break;
                default :
                    blinkEyes();
                    break;
            }

            loop();
        }, rand);
    }());

});
