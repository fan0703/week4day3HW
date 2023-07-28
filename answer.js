// Easy Going
// Write a for loop that will log the numbers 1 through 20.

// for(let i = 1; i <= 20; i++){
//     console.log(i)
// }

// Get Even
// Write a for loop that will log only the even numbers in 0 through 200.

// Hint: Think about the increment expression.

// for(let i = 1; i <=200; i++){
//     if (i % 2 == 0){
//         console.log(i)
//     }
// }

// Fizz Buzz
// This is a classic problem that you should get really comfortable solving. If you've solved it before, try to make it more elegant and short.

// Write a javascript application that logs all numbers from 1 - 100.
// If a number is divisible by 3 log "Fizz" instead of the number.
// If a number is divisible by 5 log "Buzz" instead of the number.
// If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.

// for(let i = 1; i <=100; i++){
//     if(i % 3 === 0 && i % 5 === 0) {
//         console.log(i + " FizzBuzz")
//     }else if(i % 3 === 0){
//         console.log(i + " Fizz")
//     }else  if(i % 5 === 0){
//         console.log(i + " Buzz")
//     }   
// }

//Wild Wild Life
// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant",  5000 , "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]
//Plantee just had her birthday; change Plantee's array to reflect her being a year older.
// plantee[2] = 5001
// console.log(plantee)

//Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
// wolfy[3] = "Gotham City"
// console.log(wolfy)
// wolfy.pop()
// console.log(wolfy)
// wolfy.push("Gotham City")
// console.log(wolfy)
//?????????why cannot work use .replace()

//Give D'Art a second hometown by adding "Hawkins"
// dart.push("Hawkins")
// console.log(dart)

// wolfy.shift()
// console.log(wolfy)
// wolfy.unshift("Gameboy")
// console.log(wolfy)

// Yell at the Ninja Turtles  
// const turtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]
// for(let k of turtles){
//    console.log(k.toUpperCase()
//   )
// }

// console.log(turtles.toUpperCase())

// Methods, Revisited
// const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
// for(let k in favMovies){
//     if(favMovies[k] === 'Titanic'){
//         console.log(k)
//     }
// }
// favMovies.sort()  //will change orgianl array
// console.log(favMovies)
// favMovies.pop()
// console.log(favMovies)
// favMovies.push("Guardians of the Galaxy")
// console.log(favMovies)
// favMovies.reverse()
// console.log(favMovies)
// favMovies.shift()
// console.log(favMovies)
// favMovies.unshift("Baby Shark")
// console.log(favMovies)

//splice"Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself) Thought question: did this permanently alter our array?
// for (let k in favMovies){
//     if(favMovies[k] == "Django Unchained"){
//         console.log(k)
//     }
// }
// console.log(favMovies.splice(16,0,"Avatar"))
// console.log(favMovies)
//it permanently alter the array

// slicethe last half of the array (challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it) - Thought question: did this permanently alter our array?
// console.log()
// console.log(favMovies.length /2)
// console.log(favMovies.slice(10))
// console.log(favMovies)  //not change original array

//console.log the index of "Fast and Furious" -We removed it from the array, what value do we get when we look for the index of something that is not in the array?

// for(let j in favMovies){
//     if(favMovies[j] === "Fast and Furious"){
//         console.log(j)
//     }
// }
// favMovies.splice(14, 1)
// console.log(favMovies)
// for(let m in favMovies){
//     if(favMovies[m] === "Fast and Furious"){
//         console.log(m)  //if we look for the index of something that is not in the array, it will output the array
//     }
// }

// Where is Waldo
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];
 whereIsWaldo.splice(1,1)  
 console.log(whereIsWaldo)    
 whereIsWaldo[1][2] = "No One" 
 console.log(whereIsWaldo)  
 console.log(whereIsWaldo[2][1][1])       