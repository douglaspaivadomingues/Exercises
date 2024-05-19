interface Character {
  name: string;
  specialMove: string;
}

interface DbCharacter extends Character {
  id: number;
}

const db: DbCharacter[] = [];

interface Imodel {
  create(character : Character) : Promise<DbCharacter>;
  update(id: number, character: Character): Promise<DbCharacter>;
  delete(id: number): Promise<boolean>;
  getAll(): Promise<DbCharacter[]>;
  getById(id: number): Promise<DbCharacter>;
}

class LocalDbModel implements Imodel {
  async create (character: Character) {
    const lastId = db.length > 0 ? db[db.length -1].id : 0;
    const newCharacter = { id: lastId + 1, ...character };
    db.push(newCharacter);
    return newCharacter;
  };

  async findIndesById(id: number) {
    const index = db.findIndex((character) => character.id === id);
    if (index < 0) throw new Error('Character not found');
    return index;
  }
}
