export class Calculator {
  constructor(age, sex, continent, planet) {
    this.age = age;
    this.sex = sex;
    this.continent = continent;
    this.planet = planet;
  }

  checkYears() {
    if (this.planet === 'Mercury') {
      let yearsOnMercury = (Math.floor(this.age / 0.24));
      return yearsOnMercury;
    } else if (this.planet === 'Venus') {
      let yearsOnVenus = (Math.floor(this.age / 0.62));
      return yearsOnVenus;
    } else if (this.planet === 'Mars') {
      let yearsOnMars = (Math.floor(this.age / 1.88));
      return yearsOnMars;
    } else if (this.planet === 'Jupiter') {
      let yearsOnJupiter = (Math.floor(this.age / 11.86));
      return yearsOnJupiter;
    }
  }

  checkYearsLeft() {
    if (this.sex === 'Male' && this.continent === 'North America') {
      let northAmericanMale = (77 - this.age);
      return northAmericanMale;
    } else if (this.sex === 'Female' && this.continent === 'North America') {
      let northAmericanFemale = (81 - this.age);
      return northAmericanFemale;
    } else if (this.sex === 'Male' && this.continent === 'South America') {
      let southAmericanMale = (72 - this.age);
      return southAmericanMale;
    } else if (this.sex === 'Female' && this.continent === 'South America') {
      let southAmericanFemale = (78 - this.age);
      return southAmericanFemale;
    } else if (this.sex === 'Male' && this.continent === 'Europe') {
      let europeanMale = (79 - this.age);
      return europeanMale;
    } else if (this.sex === 'Female' && this.continent === 'Europe') {
      let  europeanFemale = (84 - this.age);
      return europeanFemale;
    } else if (this.sex === 'Male' && this.continent === 'Asia') {
      let asianMale = (76 - this.age);
      return asianMale;
    } else if (this.sex === 'Female' && this.continent === 'Asia') {
      let asianFemale = (80 - this.age);
      return asianFemale;
    } else if (this.sex === 'Male' && this.continent === 'Africa') {
      let africanMale = (62 - this.age);
      return africanMale;
    } else if (this.sex === 'Female' && this.continent === 'Africa') {
      let africanFemale = (65 - this.age);
      return africanFemale;
    } else if (this.sex === 'Male' && this.continent === 'Australia') {
      let australianMale = (81 - this.age);
      return australianMale;
    } else if (this.sex === 'Female' && this.continent === 'Australia') {
      let australianFemale = (85 - this.age);
      return australianFemale;
    } else {
      let human = (78 - this.age);
      return human;
    }
  }
}

$("#formOne").submit(function(event) {
  event.preventDefault();
  let userAge = parseInt($("input#age").val)
})