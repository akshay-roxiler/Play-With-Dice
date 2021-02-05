

    var img1 = ((Math.floor(Math.random() * 6))+1);
    var img2 = ((Math.floor(Math.random() * 6))+1);

    
    // var img1SRC = ("images/dice" + img1 + ".png");
    // var img2SRC = ("images/dice" + img2 + ".png" );

    document.querySelector(".img1").setAttribute("src","images/dice" + img1 + ".png");
    document.querySelector(".img2").setAttribute("src","images/dice" + img2 + ".png");
    

    // switch (img1){

    //     case 1:
    //         document.querySelector(".img1").setAttribute("src","images/dice1.png");
    //         break;
    
    //     case 2:
    //         document.querySelector(".img1").setAttribute("src","images/dice2.png");
    //         break;
    
    //     case 3:
    //         document.querySelector(".img1").setAttribute("src","images/dice3.png");
    //         break;
    
    //     case 4:
    //         document.querySelector(".img1").setAttribute("src","images/dice4.png");
    //         break;
        
    //     case 5:
    //         document.querySelector(".img1").setAttribute("src","images/dice5.png");
    //         break;

    //     case 6:
    //         document.querySelector(".img1").setAttribute("src","images/dice6.png");
    //         break;

    // }

    // switch (img2){

    //     case 1:
    //         document.querySelector(".img2").setAttribute("src","images/dice1.png");
    //         break;

    //     case 2:
    //         document.querySelector(".img2").setAttribute("src","images/dice2.png");
    //         break;

    //     case 3:
    //         document.querySelector(".img2").setAttribute("src","images/dice3.png");
    //         break;

    //     case 4:
    //         document.querySelector(".img2").setAttribute("src","images/dice4.png");
    //         break;

    //     case 5:
    //         document.querySelector(".img2").setAttribute("src","images/dice5.png");
    //         break;

    //     case 6:
    //         document.querySelector(".img2").setAttribute("src","images/dice6.png");
    //         break;
    // }

    if(img1 > img2){
        document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
    }else if(img2 > img1){
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
    }else {
        document.querySelector("h1").innerHTML = "Draw!";
    }


//     alert("Player1 = " + img1 + " and Player2 = " + img2);
