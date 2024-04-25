class Tv {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo?: string;

  constructor(b: string, s: number, r: string, c: string[]) {
    this._brand = b;
    this._size = s;
    this._resolution = r;
    this._connections = c;
  }
  turnOn():void {
    console
      .log(`This tv is ${this._brand},${this._size}, ${this._resolution} \n\
        avaliable connections: ${this._connections}`);
  }

  get connectedTo():string | undefined {
    return this._connectedTo;
  }

  set connectedTo(value: string | undefined) {
    if (!value || this._connections.includes(value)) {
      this._connectedTo = value;
      console.log(this._connectedTo);
    } else {
      console.log('Sorry, connection unavailable!');
    }
  }

}

const tv1 = new Tv('LG', 32, '4K', ['HDMI', 'USB', 'Wi-Fi']);

tv1.connectedTo = 'Wi-Fi';
console.log('Connected to: ', tv1.connectedTo);