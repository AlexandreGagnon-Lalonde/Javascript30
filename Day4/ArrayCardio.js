const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];


// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const fifteenHundred = inventors.filter(function(inventor) {
    if (inventor.year < 1600 && inventor.year >= 1500) {
        return true
    }
});
console.log(fifteenHundred);
// Arrow function and ternary operators
const fifteenHundred2 = inventors.filter(inventor => inventor.year < 1600 && inventor. year >= 1500 ? true : false);
console.log(fifteenHundred2);


// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const names = inventors.map(function(inventor) {
    return inventor.first + " " + inventor.last
});
console.log(names);
// Arrow solution
const names2 = inventors.map( inventor => inventor.first + " " + inventor.last);
console.log(names2);


// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const oldToYoung = inventors.sort(function(a, b) {
    if(a.year > b.year) {
        return 1
    } else {
        return -1
    }
});
console.log(oldToYoung);
// Arrow solution
const oldToYoung2 = inventors.sort((a, b) => (a.year) > (b.year) ? 1 : -1);
console.log(oldToYoung2);


// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const sum = inventors.reduce(function(total, inventor) {
    return total + (inventor.passed - inventor.year)
}, 0);
console.log(sum);
// Arrow solution
const sum2 = inventors.reduce((total, inventor) => total + (inventor.passed - inventor.year), 0);
console.log(sum2);


// 5. Sort the inventors by years lived
const yearsLived = inventors.sort(function(a, b) {
    if((a.passed - a.year) > (b.passed - b.year)) {
        return 1
    } else {
        return -1
    }
});
console.log(yearsLived);
// Arrow solution
const yearsLived2 = inventors.sort((a, b) => (a.passed - a.year) > (b.passed - b.year) ? 1 : -1);
console.log(yearsLived2);


// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// // // const container = document.querySelector(".mw-category");
// // // const links = Array.from(container.querySelectorAll("a"));
// // // const de = links.map(boulName => boulName.textContent)
// // //                 .filter(boulNameDe => boulNameDe.includes("de"));

// 7. sort Exercise
// Sort the people alphabetically by last name
// first part is just an array shuffler found on github (https://github.com/Daplie/knuth-shuffle)
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
return array;
}
shuffle(people);

const sorted = people.sort(function(firstOne, nextOne) {
    const [aLast, aFirst] = firstOne.split(", ");
    const [bLast, bFirst] = nextOne.split(", ");
    return aLast > bLast ? 1 : -1;
});
console.log(sorted);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', "van", "metro", "bike", "bike", "car", "tuk-tuk", "walk" ];

const transport = data.reduce(function(obj, item) {
    if (!obj[item]) {
        obj[item] = 0;
    }
    obj[item]++;
    return obj
}, {});
console.log(transport)