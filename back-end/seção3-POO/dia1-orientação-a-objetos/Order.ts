import Client from "./Client";
import ItemOrder from "./OrderItem";

export default class Order {
  private _client: Client;
  private _items: ItemOrder[] = [];
  private _paymentMethod: string;
  private _discount: number;

  constructor(client: Client, items: ItemOrder[], paymentMethod: string, discount: number) {
    this._client = client;
    this._items = items;
    this._paymentMethod = paymentMethod;
    this._discount = discount;
  }

  get client() {
    return this._client;
  }

  set client(value: Client) {
    this._client = value;
  }

  get items(): ItemOrder[] {
    return this._items;
  }

  set items(value: ItemOrder[]) {
    if (value.length === 0) {
      throw new Error('O pedido deve ter pelo meno um item.');
    }

    this._items = value;
  }

  get paymentMethod(): string {
    return this._paymentMethod;
  }

  set paymentMethod(value: string) {
    this._paymentMethod = value;
  }

  get discount(): number {
    return this._discount;
  }

  set discount(value: number) {
    if (value < 0) {
      throw new Error('O desconto não pode ser um valor negativo.');
    }
    this._discount = value;
  }
    calculateTotal(): number {
    return this.items
      .reduce((previousValue, item) => {
        const total = previousValue + item.price;
        return total;
      }, 0);
    }

    calculateTotalWithDiscount(): number {
      return this
        .calculateTotal() * (1 - this.discount);
    }
};