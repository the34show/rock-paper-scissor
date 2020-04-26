var current_player ="Computer"
var moves=["rock","paper","scissor"]
var value2
var test = document.createElement("IMG")

$(document).ready(function(){
    var value1
    var result
    // disables player2 buttons
    $(".button2").attr("disabled", true)
    $(".submit").attr("disabled", true)
    value2= moves[Math.floor(Math.random() * 3)]

    function rock(){
        if(value2=="scissor"){
            result="Player one wins"
        }else{
            result="Player two wins"
        }
    }
    function paper(){
        if(value2=="rock"){
            result="Player one wins"
        }else{
            result="Player two wins"
        }
    }
    function scissor(){
        if(value2=="paper"){
            result="Player one wins"
        }else{
            result="Player two wins"
        }
    }


    function tie(){
        if (value1===value2){
            result= "Tie"
        }else if (value1=="rock"){
            rock()
        }else if (value1=="paper"){
            paper()
        }else {
            scissor()
        }

    }

    function winner(){
        tie()
        console.log(result)
        console.log("Player one:" + value1 +" Player two: "+ value2)
        $("#player1Result").html('<img src="images/'+value1+'.png" alt='+value1+' style= "max-width: 35%">');
        $("#player2Result").html('<img src="images/'+value2+'.png" alt='+value2+' style= "max-width: 35%">');
        if (result=="Player one wins"){
            document.getElementById("player1Result").style.backgroundColor = "#90B494";
            document.getElementById("player2Result").style.backgroundColor = "white";
            var counter1 = Number($("#score1").html())+1;
            $("#score1").html(counter1);
        }else if(result=="Tie"){
            document.getElementById("player2Result").style.backgroundColor = "#90B494";
            document.getElementById("player1Result").style.backgroundColor = "#90B494";
        }else{
            document.getElementById("player2Result").style.backgroundColor = "#90B494";
            document.getElementById("player1Result").style.backgroundColor = "white";
            var counter2 = Number($("#score2").html())+1;
            $("#score2").html(counter2);
        }
        $(".button1").attr("disabled", false);
        $(".button2").attr("disabled", false);
        computerChange()

    }
	
//make a general button click function
    $(".button1").click(function(){
        //save 
    	var buttonClick=$(this)
        value1 = buttonClick.val();
       
        $(".button1").attr("disabled", true);
        if (current_player=="Computer"){
            winner()
           }
        return value1;
    });
    //write some logic here about if computer player hten do this
    $(".button2").click(function(){
        var buttonClick=$(this)
        value2 = buttonClick.val();
        
        $(".button2").attr("disabled", true);
        return value2;
    });

    

    

    $(".submit").click(winner)

});

function computerChange(){
        var computer = document.getElementById("computer");
        current_player = computer.options[computer.selectedIndex].text;
            if (current_player=="Computer"){
                $(".button2").attr("disabled", true)
                $(".submit").attr("disabled", true)
                value2= moves[Math.floor(Math.random() * 3)]
            }
            else{
               $(".button2").attr("disabled", false)
               $(".submit").attr("disabled", false);
               value2=""
        }
               
       // console.log(value2)
               
    }

            
