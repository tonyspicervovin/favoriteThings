let randomCountryElement = document.querySelector('#random-country')
let userAnswerElement = document.querySelector("#user-answer")
let submitButton = document.querySelector("#submit-answer")
let resultTextElement = document.querySelector('#result')
let playAgainButton = document.querySelector("#play-again")
var code = ""
var myGuess = ""
var capital=""
var item = ""
var url=""
//var url = 'https://api.wheretheiss.at/v1/satellites/25544'
window.onload = function(){
    
     item = countriesAndCodes[Math.floor(Math.random()*countriesAndCodes.length)];
    randomCountryElement.innerHTML = item.name
    code = item['alpha-2']
    console.log(item.name + " "+code)   
    
    
    
    
    
   
    
    playAgainButton.addEventListener("click",function(){
        userAnswerElement.value=""
        resultTextElement.innerHTML="Replace with result"
        myGuess = document.getElementById("user-answer").value;
        console.log(resultTextElement.value)
        item = countriesAndCodes[Math.floor(Math.random()*countriesAndCodes.length)];
        randomCountryElement.innerHTML = item.name
        code = item['alpha-2']
        
        console.log(code)
        url = `http://api.worldbank.org/v2/country/${code}?format=json`
        if(myGuess.length==0){
            console.log("Empty")
        }
        callit()
        
        })

submitButton.addEventListener("click",function(){
    
    code = item['alpha-2']
    myGuess = document.getElementById("user-answer").value;
    console.log("The code is now "+code)
    url = `http://api.worldbank.org/v2/country/${code}?format=json`
    callit()
    if (capital===myGuess){
        resultTextElement.innerHTML="You got it right"
    }else{
        resultTextElement.innerHTML="Nope!"
    }
    
       
})





function callit(){
fetch(url)
.then( res => res.json())
.then( issData => {
    
    
    capital = issData[1][0].capitalCity
    
    console.log(capital)
    console.log(myGuess)
    
    

myGuess=""
}).catch(  (err)=>(
    console.log(err)
))


}

}
// TODO when the page loads, select an element at random from the countriesAndCodes array
// This array is defined in the countries.js file. Your browser treats all 
// JavaScript files as one big file, organized in the order of the script tags
// so countriesAndCodes is available to this file 

//console.log(countriesAndCodes)  // You don't need to log countriesAndCodes - just proving it is available 

// TODO display the country's name in the randomCountryElement 

// TODO add a click event handler to the submitButton.  When the user clicks the button,
//  * read the text from the userAnswerElement 
//  * Use fetch() to make a call to the World Bank API with the country code (from countriesAndCodes)
//  * Extract the capital city from the World Bank API response
//  * Compare it to the user's answer. 
//      You can decide how correct you require the user to be. A basic solution requires 
//      the user's answer to be exactly the same as the World Bank answer. If you want 
//      to be more flexible, include and use a string similarity library such as https://github.com/hiddentao/fast-levenshtein 
//  * Display an appropriate result in the resultTextElement. 
//      For example "Correct! The capital of Germany is Berlin" or "Wrong - the capital of Germany is not G, it is Berlin"

