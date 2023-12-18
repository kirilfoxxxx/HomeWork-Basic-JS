console.log("===FIRST EXCERCISE===")
function FindNumber(niza, num)
{
    let counter = 0;
    for(let i=0; i<niza.length; i++)
    {
        if(niza[i] === num){
            counter++;
        }
    }
    console.log(`There is ${counter} occurrences of number ${num} in the array`);
}

let arr = [1, 2, 3, 3, 3, 3, 4, 2, 4, 5];
let number = 3;

FindNumber(arr, number);


console.log("===SECOND EXCERCISE===")

function findEvenOdd(niza, vid)
{
    if(typeof(vid) === "string")
    {
        if(vid.toLowerCase() == "even")
        {
            console.log("Even numbers in array are:")
            for(let i=0; i<niza.length; i++)
            {
                if (niza[i] % 2 == 0)
                {
                    console.log(niza[i])
                }
            }
        }
        else if (vid.toLowerCase() == "odd")
        {
            console.log("Odd numbers in array are:")
            for(let i=0; i<niza.length; i++)
            {
                if (niza[i] % 2 == 1)
                {
                    console.log(niza[i])
                }
            }
        } else
        {
            console.log("Vnesovte pogresen input")
        }
    } 
else 
{
    console.log("Please enter string");
}
}

findEvenOdd(arr, "even")

console.log("===THIRD EXCERCISE===")

function tellStory(niza)
{
    return console.log(`This is ${niza[0]}. ${niza[0]} is a nice person. Today they are ${niza[1]}. They are ${niza[2]} all day. The end.`)
}

let story = ["Kiril", "great", "playing"];

tellStory(story);

console.log("===FORTH EXCERCISE===")
function printNumbers(array)
{
    for(let i = 0; i<array.length; i++)
    {
        let str = array.join(' ');
        return console.log(`Printing array with numbers ${str}`);
    }
}

let numbers = ["2", "3", "4", "6", "5"];

printNumbers(numbers);


console.log("===BONUS FORTH EXCERCISE===")
function validateNumber(niza)
{
    console.log("Words in array")
    for(let i=0; i<niza.length;i++)
    {
        if(isNaN(niza[i]) == true)
        {
            console.log(`You found a word ${niza[i]}`);
        }
    }
}

let vnums = ["Kiril", 2, 3, "Lisichkov", 6, 8, 9, 0];

validateNumber(vnums);

console.log("===FIFTH EXCERCISE===")

function oneline(array)
{
    let str = "";
    for(let i=0; i<array.length;i++)
    {
    let str = array.join(' ')+'.';
    return console.log(`${str}`);
    }
}

let sentence = ['A','bird','in','the','hand','is','worth','two','in','the','bush'];

oneline(sentence);


console.log("===SIXT EXCERCISE===")

function SumOfNumbers(array)
{
    let sum = 0;
    for(let i=0;i<array.length;i++)
    {
        sum += array[i];
    }
    return console.log(`Sum of the array is: ${sum}`);
}

let sumarray = [1, 5, 7, 8, 9, 10, 11];

SumOfNumbers(sumarray);

console.log("===SEVENTH EXCERCISE===")


function processData(input) {
    var count = 0;
    var evenum = [];
    for (let i = 0; i < input.length; i++){
    if (i % 2 === 0){
    evenum[count] = input[i];
    count++;
    evenum.push("\n");
    } else 
        evenum.push(" ");
    }
    console.log(evenum)
    };

let data = [1, 5, 6, 44, 7, 10, 12];

processData(data);



console.log("===EIGHTH EXCERCISE===")

function minmaxarray(array)
{
    let max = array[0];
    let min = array[0];
    for(let i = 0; i<array.length; i++)
    {
        if(array[i]>max)
        {
           max = array[i];
        } 
        if(array[i]<min)
        {
           min = array[i];
        }
    }
    let sum = max + min;
    console.log(`Max:${max}, Min:${min}, Sum:${sum}`);
}

let data2 = [1, 5, 6, 44, 7, 10, 12,"Doggo", "Challenger"];
minmaxarray(data2);

console.log("===NINETH EXCERCISE===")

function FirstLastName(firstName, lastName)
{
    let fullName = [];
    for(let i=0; i<firstName.length; i++)
    {
        for(i=0; i<lastName.length; i++)
        {
            fullName.push(`${i+1}. ${firstName[i]} ${lastName[i]}`)
        }
    }
    console.log(fullName);
}

let firstName = ["Kiril", "Vaska", "Kosta"];
let lastName = ["Lisichkov", "Dzidzeva", "Solakov"];

FirstLastName(firstName, lastName);









