interface Logger {
  log(message: string): void;
}

interface DataBase {
  logger: Logger;
  save(key: string, value: string): void;
}

class ExemapleDataBase implements DataBase {
  constructor(public logger: Logger = new ConsoleLogger)  { }

  save(key: string, value: string): void {
    this.logger.log(`Salvando o valor ${value} na chave ${key}`);
  }
}

class ConsoleLogger implements Logger {
   log(message: string): void {
    console.log(message);
   }
}

class ConsoleLogger2 implements Logger {
   log(message: string): void {
    console.log(`This is the Logger 2`);
   }
}

const logg = new ConsoleLogger();
const logg2 = new ConsoleLogger2();

const data1 = new ExemapleDataBase(logg);
const data2 = new ExemapleDataBase(logg2);
const data3 = new ExemapleDataBase();

data1.save('key1', 'value1');
data2.save('key2', 'value2');
data3.save('key3', 'value3');