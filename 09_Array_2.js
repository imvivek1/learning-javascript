const marvel_heros=["Thor","Iron man","spiderman"];
const dc_heros=["superman","flash","batman"];


// marvel_heros.push(dc_heros);


// console.log(marvel_heros);//[ 'Thor', 'Iron man', 'spiderman', [ 'superman', 'flash', 'batman' ] ] basicaaly this [ 'superman', 'flash', 'batman' ] act as a single element
// console.log(marvel_heros[3][1]);//flash

const allHeros=marvel_heros.concat(dc_heros);
// console.log(marvel_heros);//[ 'Thor', 'Iron man', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(allHeros);//[ 'Thor', 'Iron man', 'spiderman', 'superman', 'flash', 'batman' ]


const allNewHeros=[...marvel_heros,...dc_heros];//spread operator

// console.log(allNewHeros);//[ 'Thor', 'Iron man', 'spiderman', 'superman', 'flash', 'batman' ]



const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]];

const real_another_array=another_array.flat(1); //flat return new array with all sub array we can use INFINITY in flat method
// console.log(real_another_array);//[ 1, 2, 3, 4, 5, 6, 7, 6, 7, [ 4, 5 ] ]


// console.log(Array.isArray("vivek"));//false
// console.log(Array.from("vivek"));//[ 'v', 'i', 'v', 'e', 'k' ]


console.log(Array.from({name:"vivek"}));//this will return [] empty array because we have to declare keys



let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3));//[ 100, 200, 300 ]