abstract class Character2 {
    abstract talk(): void;
    abstract SpecialMove(): void;

  static characterPresentation(character: Character2): void {
    character.talk();
    character.SpecialMove();
  }

}

 class MeleeCharacter2 extends Character2 {
  constructor(private _name :string, private _specialMoveName: string ) {
    super()
  }
  talk(): void {
    console.log(`HI my name is ${this._name} i hav a power ${this._specialMoveName}`) 
  }
   SpecialMove(): void {
    console.log(`${this._name} used ${this._specialMoveName}`)
  }
}

class LongRangeCharacter2 extends Character2 {
  constructor( private _name: string, private _specialMoveName: string) {
    super();
  }
  talk(): void {
    console.log(`HI my name is ${this._name} i hav a power ${this._specialMoveName}`)
  }
  SpecialMove(): void {
    console.log(`${this._name} used ${this._specialMoveName}!`);
  }
}

const yoshi2 = new MeleeCharacter2('Yoshi', 'Super Dragon');
const Samus2 = new LongRangeCharacter2('Samus', 'Zero laser');

Character2.characterPresentation(yoshi2);
Character2.characterPresentation(Samus2);