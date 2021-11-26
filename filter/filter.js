let cities = [
    {name: 'Los Angeles', population: 3792621},
    {name: 'New York', population: 8175133},
    {name: 'Chicago', population: 2695598},
    {name: 'Houston', population: 2099451},
    {name: 'Philadelphia', population: 1526006},
    {name: 'Wasinton DC', population: 10026006}
];

const filterCity = cities.filter(city => city.population > 3500000);
// console.log(filterCity)

const sortCity = cities.sort((c1, c2) => c1.population - c2.population)
console.log(sortCity)


const nameSort = cities.map(city => city.name)
console.log(nameSort.sort())