$(document).ready(function(){
    var value1
    var value2
    var result

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
        $("#player1Result").text("Player one: "+ value1 );
        $("#player2Result").text("Player two: "+ value2 );
        if (result=="Player one wins"){
            document.getElementById("player1Result").style.backgroundColor = "green";
            document.getElementById("player2Result").style.backgroundColor = "white";
        }else{
            document.getElementById("player2Result").style.backgroundColor = "green";
            document.getElementById("player1Result").style.backgroundColor = "white";
        }
        $(".button1").attr("disabled", false);
        $(".button2").attr("disabled", false);

    }
	
//make a general button click function
    $(".button1").click(function(){
        //save 
    	var buttonClick=$(this)
        value1 = buttonClick.val();
       
        $(".button1").attr("disabled", true);
        return value1;
    });
    $(".button2").click(function(){
        var buttonClick=$(this)
        value2 = buttonClick.val();
        
        $(".button2").attr("disabled", true);
        return value2;
    });

    $(".submit").click(winner)

});

        //compare the two values
        //same play again html
        // different then RS, SP, PR P1 wins
        /// else p2 wins