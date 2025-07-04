export class ShoppingCart {
  private readonly _items: CardItem[] = [];

  addItem(item: CardItem): void {
    this._items.push(item);
  }

  removeItem(index: number):void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CardItem[]> {
    return this._items;
  }

  total(): number {
    return +this._items.reduce((total, next)=> total + next.price, 0).toFixed(2);
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  clear(): void {
    console.log('Carrinho de compras foi limpo.')
    this._items.length = 0;
  }
}
