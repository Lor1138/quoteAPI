/***********************************************************************************
 *  A random quote generator that uses https://github.com/lukePeavey/quotable to post a quote to the page
 *  each time the button is pushed.
 *  I'm doing this to help solidify my knowledge of DOM manipulation and API calls 
 */

//Store the base url in a variable for readability.
const BASE_URL = "https://api.quotable.io";

//Wrap the getQuote function in an event listener for the DOM elements
document.addEventListener("DOMContentLoaded", () => {
    //Here are the variables for the contents of the page

    const button = document.querySelector("button");
    const quote = document.querySelector("blockquote p");
    const cite = document.querySelector("blockquote cite");

    //Grab a random quote from the API, store it in a object literal
    async function getQuote() {
        const response = await fetch(`${BASE_URL}/random`);
        const data = await response.json();
        const {content} = data;
        const {author} = data;
    
        quote.textContent = content;
        cite.textContent = author;  
    }

    //Add event listener to button, load a new quote when clicked
    button.addEventListener("click", getQuote);

    getQuote();
})


