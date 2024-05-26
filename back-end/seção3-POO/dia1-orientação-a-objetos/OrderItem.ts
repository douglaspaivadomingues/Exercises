export default class ItemOrder{
  private _orderName: string;
  private _price: number;

  constructor(orderName: string, price: number) {
    this._orderName = orderName;
    this._price = price;
  }

  get orderName() {
    return this._orderName;
  }

  get price() {
    return this._price;
  }

  set orderName(value:string) {
    if (value.length < 3) {
      throw new Error('O nome deve conter no mínimo 3 caracteres.');
    }
  }

  set price(value:number) {
    if (value <= 0) {
      throw new Error('O preço deve ser positivo.');
    }
  }
}