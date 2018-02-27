$(document).ready(function() {
    var Random=Math.floor(Math.random()* 101 + 39)
    //Selects Random number for player to guess between 81 and 100
    //
    $('#randomNumber').text(Random);
    //
    var gem1 = Math.floor(Math.random() * 11 + 1);
    var gem2 = Math.floor(Math.random() * 11 + 1);
    var gem3 = Math.floor(Math.random() * 11 + 1);
    var gem4 = Math.floor(Math.random() * 11 + 1);
    //Random number for each Jewel to select between 1 & 10
    var userTotal = 0;
    var wins = 0;
    var losses = 0;
    //Score Count and User total
    //
    $('.scoreW').text("Wins: " + wins);
    $('.scoreL').text("Losses: " + losses);
    // attaches wins and losses to wins & losses div
    
    function reset(){
        Random = Math.floor(Math.random() * 101 + 39);
        gem1 = Math.floor(Math.random() * 9 + 1);
        gem2 = Math.floor(Math.random() * 9 + 1);
        gem3 = Math.floor(Math.random() * 9 + 1);
        gem4 = Math.floor(Math.random() * 9 + 1);
        userTotal = 0;
        $('#randomNumber').text(Random);
        $('#userTotal1').text(userTotal);
    }
    

    function winner(){
        alert("Nice one!")
        wins++;
        $('.scoreW').text("Wins: " + wins)
        reset();
    }

    function loser(){
        alert("You Lost!")
        losses++;
        $('.numberLosses').text("Losses: " + losses)
        reset();
    }

    $('div#userTotal1').html(userTotal);

    $('#one').on ('click', function() {
        userTotal = userTotal + gem1;
        console.log("New userTotal= " + userTotal)
        $('#userTotal1').html(userTotal);
        if (userTotal == Random) {
            winner();
        } else if (userTotal > Random){
            loser();
        }
    });

    $('#two').on('click', function () {
        userTotal = userTotal + gem2;
        console.log("New userTotal= " + userTotal)
        $('#userTotal1').html(userTotal);
        if (userTotal == Random) {
            winner();
        } else if (userTotal > Random) {
            loser();
        }
    });

    $('#three').on('click', function () {
        userTotal = userTotal + gem3;
        console.log("New userTotal= " + userTotal)
        $('#userTotal1').html(userTotal);
        if (userTotal == Random) {
            winner();
        } else if (userTotal > Random) {
            loser();
        }
    });

    $('#four').on('click', function () {
        userTotal = userTotal + gem4;
        console.log("New userTotal= " + userTotal)
        $('#userTotal1').html(userTotal);
        if (userTotal == Random) {
            winner();
        } else if (userTotal > Random) {
            loser();
        }
    });


    

    });

