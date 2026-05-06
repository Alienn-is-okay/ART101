

let ballerinaStory = "ballerina story";

$("#ballerina").click(function () {


    let message = "<p>ballerinaStory</p>";

    $("#output").html(message);
};



let count = 0;

$("#needy-button").click(function () {

   
    let message = "<p>My current mood is " + count + ".</p>";
    
    $("#output").html(message);


});