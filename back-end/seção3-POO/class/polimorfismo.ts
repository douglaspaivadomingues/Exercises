class Animal {
  public turns: number = 0;
  public makeSound(sound: string) {
    console.log('Som emitido' + sound);
  }
}

class Dogs extends Animal {
  setTurns(turns: number) {
    this.turns = turns;
  }

  public makeSound(sound: string): void {
    this.setTurns(5) 
      console.log(`Som emitido: ${sound}, ${this.turns} vezes`);
  }
}

class Bird extends Animal {
  public specie : string;

  constructor() {
    super();
    this.specie = 'pássaro';
  }

  public makeSound(sound: string): void {
    console.log( `O som  emitido pelo ${this.specie} é ${sound} `)
  }
}

const dogs = new Dogs();
dogs.makeSound('Au au au');

const birds = new Bird();
birds.makeSound('Plu plu plu plu');


