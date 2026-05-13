let ballerinaStory = "You keep your head down and strive to become the most dedicated ballet student in the history of the world. You ignores your weird peers when they talk about dissapearing ballerinas and remain peacefully in your bed during the academy blackout. You don't make many friends but you become a Prima Ballerina and star in the Big Performance";

$("#ballerina").click(function () {

    let message = "<h2>" + ballerinaStory + "</h2>";

    $("#ballerina-output").html(message);

});

let witchStory = "You can't help but notice strange things happening around the school. You consult your classmates and learn of a theory going around about missing students. Soon you become weary of the headmistress and her involvement with these students. One night when a blackout hits the academy, you sneak away to investigate. You unlock a secret door and dicovers a coven of witches hidden deep within the school!!!";

$("#needy-button").click(function () {


    let message = "<h2> " + witchStory + ".</h2>";

    $("#witch-output").html(message);

});


$("#character-selection").click(function () {
    let userNumber = prompt("1 = Angelina\n2 = William\n3 = Alice");

    if (userNumber == 1) {
        $("#output").html('<img id="angelina" src="angelina.png">');
    }

    if (userNumber == 2) {
        $("#output").html('<img id="wbottom" src="wbottom.png">');
    }

    if (userNumber == 3) {
        $("#output").html('<img id="animble" src="animble.png">');
    }
});