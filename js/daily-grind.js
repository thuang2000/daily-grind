/*

    One unique image, with appropriate and matching content in the alt tag.  
    A paragraph or two of content that describes the daily item (paragraph must include the name of the highlighted weekday)
    A unique color that supports the image and paragraph of content


    pic - image src
    alt - the alt tag for the image
    desc - a description of the coffee
    day - the day of the week for the coffee
    color - color associated with coffee
    name - the name of the coffee

*/


let myDate = new Date();
let myDay = myDate.getDay();
let today = "";

//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate query string parameters
const urlParams = new URLSearchParams(queryString);

//retrive data from querystring
if(urlParams.has("day")){
    myDay = urlParams.get("day");
}

//turn string into integer
myDay = parseInt(myDay);




switch(myDay){

 	case 0:
   		today = "Sunday";
        coffee = {
            name:"Caramel Latte",
            pic:"caramel-latte.jpg",
            alt:"A pic of a caramel latte.",
            color:"yellow",
            day:"Sunday",
            desc:`Caramel latte would be nice!`
        };
 	break;

 	case 1:
   		today = "Monday";
        coffee = {
            name:"Cold Brew",
            pic:"cold-brew.jpg",
            alt:"A pic of a cold brew.",
            color:"black",
            day:"Monday",
            desc:`Chilly cold brew to start my day!`
        };
 	break;

    case 2:
   		today = "Tuesday";
        coffee = {
            name:"Bubble Tea",
            pic:"bubble-tea.jpg",
            alt:"A pic of a bubble tea.",
            color:"pink",
            day:"Tuesday",
            desc:`I like some bubble tea!`
        };
 	break;

    case 3:
   		today = "Wednesday";
        coffee = {
            name:"drip",
            pic:"drip.jpg",
            alt:"A pic of a drip coffee.",
            color:"red",
            day:"Wednesday",
            desc:`Classy drip coffee!`
        };
 	break;

    case 4:
   		today = "Thursday";
        coffee = {
            name:"Frappaccino",
            pic:"frappaccino.jpg",
            alt:"A pic of a frappaccino.",
            color:"brown",
            day:"Thursday",
            desc:`Tasty frappaccino!`
        };
 	break;

    case 5:
   		today = "Friday";
        coffee = {
            name:"Mocha",
            pic:"mocha.jpg",
            alt:"A pic of a mocha tea.",
            color:"green",
            day:"Friday",
            desc:`I want mocha!`
        };
 	break;

    case 6:
   		today = "Saturday";
        coffee = {
            name:"Pumpkin Spice Latte",
            pic:"pumpkin-spice-latte.jpg",
            alt:"A pic of a pumpkin spice latte.",
            color:"orange",
            day:"Saturday",
            desc:`The season is right for some pumpkin spice latte!`
        };
 	break;

 	default:
    	today = "Something went wrong!";

}

console.log(coffee);
//alert(coffeeTemplate(coffee));
//adds coffee to page?
document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);
//change background color of HTML element
document.querySelector("html").style.backgroundColor = coffee.color;
//change strong tags in template to our color
document.querySelectorAll("#coffee-cup strong").forEach(el => {
    el.style.color = coffee.color;
});



function coffeeTemplate(coffee){
    let myReturn = "";

    myReturn += `
        <p>
<img src="images/${coffee.pic}" alt="${coffee.alt}" id="coffee">
<strong>${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong>${coffee.name}</strong> ${coffee.desc}
</p>

    `;

    return myReturn;
}


