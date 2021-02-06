import {Calculator} from './../src/planets.js'

describe ('Calculator', () => {

  test('should correctly create a calculator object with a base age',() => {
    const calculator = new Calculator('testAge','testSex', 'testContinent', 'testPlanet');
    expect(calculator.age).toEqual('testAge');
    expect(calculator.sex).toEqual('testSex');
    expect(calculator.continent).toEqual('testContinent');
    expect(calculator.planet).toEqual('testPlanet');
  });

  test('should intake age and return years on Mercury', () => {
    const mercury = new Calculator(5,'','','Mercury');
    expect(mercury.checkYears()).toEqual(20);

  });

  test('should take an age and return years on Venus', () => {
    const venus = new Calculator(5,'','','Venus');
    expect(venus.checkYears()).toEqual(8);
    });

  test ('should take an age and return years on Mars', () => {
    const mars = new Calculator(10,'','','Mars');
    expect(mars.checkYears()).toEqual(5);
    });

  test ('should take an age and return years on Jupiter', () => {
    const jupiter = new Calculator(20,'','','Jupiter');
    expect(jupiter.checkYears()).toEqual(1);
    });

    test ('should take an age, convert it to years on specified planet, then convert it to years left to live', () => {
    const human = new Calculator('','','','');
    expect(human.checkYearsLeft()).toEqual(78);
    });
});