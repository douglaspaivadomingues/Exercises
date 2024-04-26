abstract class Character {
  abstract talk(): void;
  abstract SpecialMove(): void;
}

class MeleeCharacter extends Character {
  talk() {
    console.log('Andou 10 metros e meteu a porrada')
  }

  SpecialMove(): void {
    console.log('Sequência de 5 golpes e duas porradas e uma rasteria muito loca')
  }
}

class LongRangeCharacter extends Character {
  talk() {
    console.log('Nem andou e já desceu a porrada')
  }

  SpecialMove(): void {
    console.log('chgute chute, soco, soco, bate, bate e vira, bate rasteira e socão');
  }
}

const yoshi = new MeleeCharacter();
const Samus = new LongRangeCharacter();

yoshi.talk();
yoshi.SpecialMove();
Samus.talk();
Samus.SpecialMove();