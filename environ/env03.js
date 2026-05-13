let ballerinaStory = "Angelina keeps her head down and strives to become the most dedicated ballet student in the history of the world. She ignores her weird peers when they talk about dissapearing ballerina and remains peacefully in her bed during the academy blackout. Angelina doesn't make many friends but she does become a Prima Ballerina and stars in the Big Performance";

$("#ballerina").click(function () {

    let message = "<h2>" + ballerinaStory + "</h2>";

    $("#ballerina-output").html(message);

});

let witchstory = "Angelina can't help but notice strange things happening around her. She consults her classmates and learns of a theory going around about missing students. Soon she becomes weary of the headmistress and her involvement with these students. One night when a blackout hits the academy, she sneaks away to investigate. Angelina unlocks a secret door and dicovers a coven of witches hidden deep within the school!!!";

$("#needy-button").click(function () {


    let message = "<h2> " + witchstory + ".</h2>";

    $("#witch-output").html(message);

});

