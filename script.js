    const inventors = [

  { first: 'Albert', last:'Einstein', year: 1879, passed:1955},
  { first: 'Issac', last:'Newton', year:1643, passed:1727},
  {first:'Galileo', last: 'Galilei', year:1554, passed:1642},
  {first:'Marie', last:'Curie', year: 1867, passed:1934},
  {first:'Johanes', last:'Kepler', year:1571, passed:1630},
  {first:'Nicoulas', last: 'Copernicus', year:1473, passed:1543},
  {first:'Max', last:'Planck', year: 1858, passed:1947},
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }

    ];


    const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];
    const fifteen = inventors.filter(inventor => (inventor.year >= 1550 && inventor.year < 1660));

    console.log(" \n1. Filter the list of inventors for those who were born in the 1500's");
    console.table(fifteen);

    const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);

    console.log("\n2. Give us an array of the inventors' first and last names");
    console.table(fullNames);


    const ordered = inventors.sort((firstPerson, secondPerson) => (firstPerson > secondPerson ? 1 : -1));

    console.log("\n3. Sort the inventors by birthdate, oldest to youngest");
    console.table(ordered);


     const totalYears = inventors.reduce((total, inventors) => {
        return total + (inventors.passed - inventors.year);
      }, 0);
      console.log("\n4. How many years did all the inventors live?");
      console.log(totalYears);


      const oldest = inventors.sort((firstPerson, secondPerson) => {
        const lastGuy = firstPerson.passed - firstPerson.year;
        const nextGuy = secondPerson.passed - secondPerson.year;
  
        return lastGuy > nextGuy ? 1 : -1;
      });
  
      console.log("\n5. Sort the inventors by years lived");
      console.table(oldest);

      console.log("\n6. create a list of Boulevards in Paris that contain 'de' anywhere in the name\nhttps://en.wikipedia.org/wiki/Category:Boulevards_in_Paris");

      const alpha = people.sort((lastOne, nextOne) => {
        const [aLast, aFirst] = lastOne.split(', ');
        const [bLast, bFirst] = nextOne.split(', ');
        return aLast > bLast ? 1 : -1;
      });
  
      console.log("\n7. sort Exercise. Sort the people alphabetically by last name");
      console.table(alpha);

      const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick' ];

      const transportation = data.reduce(function(obj, item) {
        if(!obj[item]) {
          obj[item] = 0
        }
        obj[item]++;
        return obj;
      }, {});
  
      console.log("\n8. Reduce Exercise. Sum up the instances of each of these");
      console.table(transportation);