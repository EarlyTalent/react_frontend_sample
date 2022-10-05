// import { LoremIpsum } from "lorem-ipsum";

// const lorem = new LoremIpsum({
//     sentencesPerParagraph: {
//         max: 8,
//         min: 4
//     },
//     wordsPerSentence: {
//         max: 16,
//         min: 4
//     }
// });

// const RecipeData = [
//     {
//         title: "Recipe 5",
//         subtitle: "Subtitle 5",
//         text: lorem.generateParagraphs(9),
//         author: "Author 2"
//     },
//     {
//         title: "Recipe 3",
//         subtitle: "Subtitle 3",
//         text: lorem.generateParagraphs(9),
//         author: "Author 3"        
//     },
//     {
//         title: "Recipe 1",
//         subtitle: "Subtitle 1",
//         text: lorem.generateParagraphs(9),
//         author: "Author 1",
//     },
//     {
//         title: "Recipe 2",
//         subtitle: "Subtitle 2",
//         text: lorem.generateParagraphs(9),
//         author: "Author 1",
//     },
//     {
//         title: "Recipe 3",
//         subtitle: "Subtitle 3",
//         text: lorem.generateParagraphs(9),
//         author: "Author 1",
//     },
//     {
//         title: "Recipe 4",
//         subtitle: "Subtitle 4",
//         text: lorem.generateParagraphs(9),
//         author: "Author 2",
//     },
// ]

const elements = [1,2,3,12,13,24,25,27,44,45,47,55,78,79,80,81,82];

const RecipeData = [];

for (let ele of elements) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${ele}`)
    .then(response => response.json())
    .then(json => RecipeData.push(json))
}

export default RecipeData