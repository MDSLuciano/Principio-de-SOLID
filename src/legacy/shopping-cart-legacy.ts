type CardItem = {
  name: string;
  price: number
}
type OrderStatus = 'open' | 'closed'

export class ShoppingCartLegacy {
  private readonly _items: CardItem[] = [];
  private _orderStatus: OrderStatus = 'open'

  addItem(item: CardItem): void {
    this._items.push(item);
  }

  removeItem(index: number):void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CardItem[]> {
    return this._items;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  total(): number {
    return +this._items.reduce((total, next)=> total + next.price, 0).toFixed(2);
  }

  checkout(): void {
    if (this.isEmpty()){
      console.log('Seu carrinho está vazio');
      return
    }

    this._orderStatus = 'closed';
    this.sendMessage(`Seu pedido com total de ${this.total()} foi recebido`);
    this.saveOrder();
    this.clear();
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  sendMessage(msg: string): void {
    console.log('Mensagem enviada:', msg);
  }

  saveOrder(): void {
    console.log('Pedido salvo com sucesso.');
  }

  clear(): void {
    console.log('Carrinho de compras foi limpo.')
    this._items.length = 0;
  }
}

const shoppingCartLegacy = new ShoppingCartLegacy();
shoppingCartLegacy.addItem({ name: 'Camiseta', price: 49.9 });
shoppingCartLegacy.addItem({ name: 'Caderno', price: 9.9 });
shoppingCartLegacy.addItem({ name: 'Lápis', price: 1.59 });

console.log(shoppingCartLegacy.items);
console.log(shoppingCartLegacy.total());
console.log(shoppingCartLegacy.orderStatus)
shoppingCartLegacy.checkout()
console.log(shoppingCartLegacy.orderStatus)
