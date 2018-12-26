const allheroData = LIB;
const woodsList = allheroData.filter(i => i.raceId === 10)[0];
const fireList = allheroData.filter(i => i.raceId === 20)[0];
const guardianList = allheroData.filter(i => i.raceId === 30)[0];
const voidList = allheroData.filter(i => i.raceId === 40)[0];

const woodsHero = woodsList.heroList;
console.log(woodsHero);

const $container = $('#container');