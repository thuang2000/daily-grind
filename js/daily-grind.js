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
    	today =  "Sunday";
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

 	default:
    	today = "Something went wrong!";

}

console.log(coffee);
alert(coffeeTemplate(coffee));
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


