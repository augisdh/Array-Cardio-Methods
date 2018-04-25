"use strict";

const inventors = [
    {first: 'Albert', last: 'Einstein', year: 1879, passed: 1955},
    {first: 'Isaac', last: 'Newton', year: 1643, passed: 1727},
    {first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642},
    {first: 'Marie', last: 'Curie', year: 1867, passed: 1934},
    {first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630},
    {first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543},
    {first: 'Max', last: 'Planck', year: 1858, passed: 1947},
    {first: 'Nikola', last: 'Tesla', year: 1856, passed: 1943},
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick',
     'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire',
     'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David',
     'Benjamin, Walter', 'Benn, Tony', 'Beenington, Cheester', 'Benson, Leana', 
     'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 
     'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 
     'Berry, Halle', 'Berry Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 
     'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Bollings, Josh', 'Biondo, Frank', 
     'Birrell, Augustine', 'Blackm, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// Array tasks //
// 1. Filter the list of inventors for those who were born in the 1500's {use filter();}
const bornXVIa = inventors.filter(item => item.year > 1499 && item.year < 1600);
console.table(bornXVIa);

// 2. Give us and array of the inventory first and last names {use map();}
const names = inventors.map(name => name.first + ' ' + name.last);
console.table(names);

// 3. Sort the inventors by birthdate, oldest to youngest {use sort();}
const order = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
console.table(order);

// 4. How many years did all the inventors lived? {use reduce();}
const lived = inventors.reduce((total, item) => {
    return total += (item.passed - item.year);
}, 0);
console.log(lived);

// 5. Sort the inventors by years lived {use sort();}
const oldest = inventors.sort((a, b) => {
    const lastInventor = a.passed - a.year;
    const nextInventor = b.passed - b.year;
    return lastInventor > nextInventor ? -1 : 1;
});
console.table(oldest);

// 6. Create a list of Boulevards in Paris that contain "de" anythere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const links = Array.from(document.querySelectorAll('.mw-category a'));
// const de = links.map(link => link.textContent).filter(name => name.includes("de"));

// 7. Sort the people alphabetically by last name {use sort();}
const orderAlpha = people.sort((first, next) => {
    const [aLast, aFirst] = first.split(", ");
    const [bLast, bFirst] = next.split(", ");
    return aLast > bLast ? 1 : -1;
});
console.log(orderAlpha)

// 8. Sump up the instances of each of these {use reduce();}
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 
    'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

const transport = data.reduce((obj, item) => {
    if(!obj[item]){
        obj[item] = 0;
    }
    obj[item]++;
    return obj;
}, {});

console.log(transport);