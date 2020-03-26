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
$("#social-nav").closest(".wrapper").css({border: "3px solid red"});

