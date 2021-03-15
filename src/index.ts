class Kimchi {
  public name: string;
  public year: number;
  public taste: string;
  constructor(name: string, year: number, taste: string) {
    this.name = name;
    this.year = year;
    this.taste = taste;
  }
}

interface IKimchi {
  name: string;
  year: number;
  taste: string;
}

const mullKimchi = new Kimchi("Mull Kimchi", 3, "Good");

const sayKimchiTaste = (kimchi: Kimchi): string => {
  return `${kimchi.name}, this is ${kimchi.year} year(s), taste is ${kimchi.taste}!`;
};

console.log(sayKimchiTaste(mullKimchi));

export {};
