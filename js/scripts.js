//Lesson #5
//$('#lead-banner p');

//$('h3').css({border: "3px solid blue"});

//$('.wrapper').css({border: "3px solid red"});

//$('#clients').css({border: "3px solid yellow"});

// Lesson #6
// jQuery Filters

//$("header nav li:first").css({border: "2px  solid red"});
//$("header nav li:last").css({border: "2px  solid red"});

// Some other examples could be li:even, or li:first-child, li:odd.

//$("section:not('#contact')").css({border: "3px solid green"});

//$("#social-nav li:lt(3)").css({border: "2px solid green"});
//$("#social-nav li:gt(2)").css({border: "2px solid red"});

//Get every div that has a class. This called an attribtue filter

//$("div[class]")

//Attribute filter with attribute equalling something

//$("img[alt=quote")

//Lesson 7 working with DOM
//This one will grap the next element after #contact-methods
//$("#contact-methods").next().css({border: "2px solid blue"});

// You could also do previous, which would get the element before the element you specific
//$("#social-nav").prev().css({border: "2px solid blue"});

// If you wanted to get the parent of an element
//$(".banner-title").parent().css({border: "2px solid blue"});

//If you make parent plural. you get all of the parent elements.

//$(".banner-title").parents().css({border: "2px solid blue"});

//Get all f the childern elements
//$("#social-nav").children().css({border: "2px solid blue"});

//This will find all of the instances of class=facebook within the element id="contact"
//$("#contact").find(".facebook").css({border: "2px solid blue"});

//This will find the element with a clsss of "wrapper closest to the element ID="social-nav". It moves up the DOM to find it
//$("#social-nav").closest(".wrapper").css({border: "3px solid red"});


//Chaining

//$("#contact-methods").css({border: "2px solid red"}).next().css({border: "2px solid green"}).closest("section").css({border: "2px solid blue"});

//Lesson 9 adding content to page
/*var tweet = "<div style='margin: 20px 0; padding: 10px; background:#eee'>The big fight live: Ham vs Cheese! </div>";

$("#tweets div p").text(tweet);
*/

/* Adding and changing content
.append()   adds content to bottom of the element
.prepend()  adds content to top of element
.before()   adds content before element
.after()    adds content after element
.html()     changes the wole html of the element
.text()     changes the text of an element.

*/

//wrap and unwrap Lesson 10
/* wrap() - wraps all matched elments indivdually
unwarp() - unwraps all matched elements
warpall() - wraps all elements combined with  1 single element.

*/
//$("section").wrap("<div>")
//$("section").unwrap()
//$("section").wrapAll("<div>")
/*let wrapper = "<div class='wrapper'>";
let button = $('.button');
let wrapped = true;
button[0].onclick = function () {
    if (wrapped) {
        $("section").unwrap();
        wrapped = false;
        button.text("Wrap");
    } else {
        $("section").wrapAll(wrapper)
        wrapped = true;
        button.text("Unwrap");

    }
}
*/

// Lesson 11 Removing content
//$(".button").empty();
//$(".button").remove();

// Lesson 12 changing attributes
/*
.removeAttr() - removes an attribute completely
.att() - can read or set and attribute.

*/

//$("#contact img").removeAttr("alt");
// This one actually inputs the second value in the attribute. $("#contact img").attr("alt", "location");
//console.log($("#contact img").attr("alt"));

/* Lesson 13 controllling css 

*/

//$("#social-nav").css("top", "-200px").css("left", "100px");
/*
let myObject = {
    "height": "40",
    "speed" : "100"
}

$("#social-nav").css({
    "top": "-400px",
    "left" : "150px",
    "opacity" : "0.5",
    "border-top": "4px solid red"
});

*/

//Lesson #14 working with classes
/*
removeClass() - removes class form matched elemets
addClass() - adds a class to the matched elements
toggleClass - toggles the class on an off on the matched elements
*/

//$("header .wrapper").removeClass("wrapper");
//s$("header > div").addClass("wrapper");

let button = $("#lead-banner a");

button[0].onclick = function () {
    $("#points-of-sale").toggleClass("open");
    return false;
}



// Lesson 15 binding events

/* 
on() - binds an event to matched elemets
off() - unbinds event from matched elements

*/


let myLis = $("#points-of-sale li");

myLis.on("click", function () {
    $(this).css({ "background": "pink" })
    myLis.off("click");
});

/* Lesson 16 Event Helpers*/

$("#lead-banner").click(function () {  // this is the same as .on("click", function()
    alert("You clicked me");
    $(this).off("click");
});

/* Lesson 17 Document load events */
//These three are document ready
// $(document).on("ready", function() {

// })

// This is the Same as above.
// $(document).ready(function(){

// })

// Even shorter yet
// $(function(){

// })


// This is the window ready method
// $(window).on("load", function(){

// })

// $(window).load(function (){

// })

// Lesson 18 Event Object

$(document).ready(function () {

    $("*").on("click", function (e) {
        console.log(e.target);
        console.log("X coordinate of the event is: " + e.pageX);
        console.log("Y coordinate of the event is: " + e.pageY);
        console.log("The event type is " + e.type);
        e.stopPropagation();
    });
});

//Lesson 19 Animations
//This is the animate method. This only works on elements with numeric values.
// $(document).ready(function (){

//     $("section > h2").on("click",function(){
//         $(this).animate({"width":"500px", "height": "100px"}, 1000, "linear", function(){
//             alert("Animation complete!")
//         })
//     })
// })

// this is the same as above only cleaner
// $(document).ready(function (){

//     function complete(){
//         alert("Animation complete!")
//     };

//     $("section > h2").on("click",function(){
//         $(this).animate({"width":"500px", "height": "100px"}, 1000, "linear", complete);
//     })
// })


// Lesson 20 Fading elements
// $(document).ready(function () {

//     function complete() {
//         alert("Animation complete!")
//     };

//     $("section > h2").on("click", function () {
//         // $(this).fadeOut(2000).fadeIn(500);
//         //$(this).fadeTo(1000, 0.2);
//         $(this).fadeTo(200, 0.2)  // Creates a little flashing type effect.
//             .fadeTo(200, 0.8)
//             .fadeTo(200, 0.2)
//             .fadeTo(200, 0.8)
//             .fadeTo(200, 0.2)
//             .fadeTo(200, 0.8);
//     })
// })

//Lesson 21 Hide, show and toggle.

$(document).ready(function () {

    $("img[alt=map]").on("click", function () {
       //$(this).hide(1000).show(1000);
       $("section > h2").toggle(1000);
    })
})