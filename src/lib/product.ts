abstract class ProductBase {
  constructor(public id: number, public name: string, public icon: string) {
    this.id = id;
    this.name = name;
    this.icon = icon;
  }

  
  validate() : boolean {
    throw new Error('Not implemented');
  }

}

export class FoodProduct  extends ProductBase{
  //properties/fields


  //constructor (auto implemented properties)


  //functions
  
  validate() : boolean {
    return !!this.id && !!this.name && !! this.icon;
  }

}

class SportingGoodsProduct extends ProductBase {
  constructor(id: number, name: string, icon: string) {
    super(id, name, icon);

  }
}



