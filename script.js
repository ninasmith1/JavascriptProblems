//write first method
function sleep_in(x,y) {
    if(x == false || y == true) {
        return true;
    }else{
        return false;
    }
}

//write second method
function monkey_trouble(a_smile, b_smile) {
    if(a_smile==b_smile){
        return true;
    }else{
        return false;
    }
}

function string_times(str, n){
    var text = str;
    if(n==0) {
        text = ""
        return text;
    }else{
        for (var i = 1; i < n; i++){
            text = text + str;
        }
        return text;
    }
}

function front_times(string, n){
    var firstThree = string.substring(0,3);
    var result = "";
    for(var i=0; i<n; i++){
        result = result + firstThree
    }
    return result;
}

function string_bits(string){
    var stringLength = string.length;
    var result = "";
    for(var i = 0; i < stringLength; i+=2){
        var groups = string.substring(i, i+2)
        var every_other = groups.substring(0,1)
        result = result + every_other;
    }
    return result;
}



function caughtSpeeding(speed, bday){
    if(bday == true){
       if(speed<=65){
           var ticket = 0;
           return ticket;
       }
       if(speed>66 && speed<86){
            var ticket = 1;
            return ticket;
       }
       if(speed>=86){
           var ticket = 2;
           return ticket;
       }
    }else{
        if(speed<=60){
            var ticket = 0;
            return ticket;
        }
        if(speed>61 && speed<81){
            var ticket = 1;
            return ticket;
        }
        if(speed>=81){
            var ticket = 2;
            return ticket;
        }
    }
}

function fizz_buzz(num){
    if (num%3==0) {
        if (num % 5 == 0) {
            var num = "FizzBuzz";
        }else{
            var num = "Fizz";
        }
    }else{
        if(num%5==0){
            var num = "Buzz";
        }else{
            var num = num + "!"
        }
    }
    return num;
}

function teaParty(tea, candy){
    if(tea<5 || candy<5){
        var outcome = 0;
    }
    if(tea>=5 && candy>=5){
        if(tea >= candy*2 || candy >= tea*2){
            var outcome = 2;
        }else{
            var outcome = 1;
        }
    }
    return outcome;
}


function blackjack(num1, num2){
    if(num1 == 21){
        return num1;
    }
    if(num2 == 21){
        return num2
    }
    if(21 > num2 && (21 - num1) > (21 - num2)){
        return num2;
    }
    if (21 > num1 && (21 - num2) > (21 - num1)) {
        return num1;
    }
    if (21 < num1 || 21 < num2) {
        if (21 < num1 && 21 > num2) {
            return num2;
        }
        if (21 > num1 && 21 < num2) {
            return num1;
        }
        if (21 < num1 && 21 < num2) {
            return 0;
        }
    }
}

function loneSum(num1, num2, num3){
    var groupOne = num1 == num2;
    var groupTwo = num1 == num3;
    var groupThree = num2 == num3;

    var sum = num1 + num2 + num3;

    var sumTrue = sum/num1 == 3;

    if(sumTrue == true){
        return 0;
    }
    if(sumTrue == false){
        if(groupOne == true){
            return num3;
        }
        if(groupTwo == true){
            return num2;
        }
        if(groupThree == true){
            return num1;
        }
    return sum;
    }
}












//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += sleepIn(true, false);
    document.getElementById("output").innerHTML += nextOne(true, false);
    //test third method, etc
}

