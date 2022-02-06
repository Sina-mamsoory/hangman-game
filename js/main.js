"use strict";

// questions
const questions = [
    {explanations: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
        moiveOrSeries : "Parasite"},
    {explanations: "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans for the same.",
        moiveOrSeries : "Inglourious Basterds"},
    {explanations: "When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories.",
        moiveOrSeries : "Eternal Sunshine of the Spotless Mind"} , 
    {explanations: "A newly fostered young boy in search of his mother instead finds unexpected super powers and soon gains a powerful enemy.",
        moiveOrSeries : "Shazam!"}, 
    {explanations: "A failed reporter is bonded to an alien entity, one of many symbiotes who have invaded Earth. But the being takes a liking to Earth and decides to protect it.",
        moiveOrSeries : "Venom"},  
    {explanations: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        moiveOrSeries : "The Dark Knight"},
    {explanations: "A family saga with a supernatural twist, set in a German town, where the disappearance of two young children exposes the relationships among four families.",
        moiveOrSeries : "Dark"},
    {explanations: "a guy is 17 and is pretty sure he is a psychopath. a girl, also 17, is the cool and moody new girl at school. The pair make a connection and she persuades him to embark on a road trip in search of her real father.",
        moiveOrSeries : "The End of the F***ing World"},
    {explanations: "Orphaned at the tender age of nine, prodigious introvert Beth Harmon discovers and masters the game of chess in 1960s USA. But child stardom comes at a price.",
        moiveOrSeries : "The Queen's Gambit"},
    {explanations: "12-year-old Mathilda is reluctantly taken in by Léon, a professional assassin, after her family is murdered. An unusual relationship forms as she becomes his protégée and learns the assassin's trade.",
        moiveOrSeries : "Leon"},
    {explanations: "Vikings transports us to the brutal and mysterious world of Ragnar Lothbrok, a Viking warrior and farmer who yearns to explore - and raid - the distant shores across the ocean.",
        moiveOrSeries : "Vikings"},
    {explanations: "The story of young teenagers and pupils on Hartvig Nissens upper secondary school in Oslo, and their troubles, scandals and everyday life. Each season is told from a different person's point of view.",
        moiveOrSeries : "Skam"},
    {explanations: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
        moiveOrSeries : "Forrest Gump"},
    {explanations: "A successful entrepreneur accused of murder and a witness preparation expert have less than three hours to come up with an impregnable defense.",
        moiveOrSeries : "The Invisible Guest"},
    {explanations: "When Cecilia's abusive ex takes his own life and leaves her his fortune, she suspects his death was a hoax. As a series of coincidences turn lethal, Cecilia works to prove that she is being hunted by someone nobody can see.",
        moiveOrSeries : "The Invisible Man"},
    {explanations: "Set in a dystopian future, a woman is forced to live as a concubine under a fundamentalist theocratic dictatorship.",
        moiveOrSeries : "The Handmaid's Tale"},
] ;


const keys =  document.querySelectorAll("div");
const dashed = document.querySelector(".dashed").querySelector("p");
const img = document.getElementsByClassName("image")[0].querySelector("img");

keys.forEach(items => {
    items.addEventListener('click', buttonHandler)
})



// a function in order to chose a question random.
let randomItem;
let randomIndex;
let randomExplanation;
function choseRandomItem() {
    randomIndex = (Math.random() * (questions.length - 1) ).toFixed();
    randomItem = questions[randomIndex].moiveOrSeries;
    randomExplanation = questions[randomIndex].explanations;
    document.getElementById("question").innerText = randomExplanation;
}

choseRandomItem();

// this  function will be executed when user click on letters
let i = 1;
function buttonHandler(event) { 
    event.target.classList = "used";
    if(randomItem.toLowerCase().includes(event.target.innerText) || randomItem.toUpperCase().includes(event.target.innerText)) {
        console.log("hello")
    } else { 
        img.src = `./assets/hangman${i++}.png `
        if( i === 6)
        {
            setTimeout(() => {
                reload();
            }, 4000);
        }
    }
}

// a function to reload page 
function reload() {
    location.reload();
}

console.log(randomItem)