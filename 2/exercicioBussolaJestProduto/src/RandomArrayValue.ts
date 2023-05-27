import { ProductType } from "./ProductType";

export class RandomArrayValue {
  private array: ProductType[];
  private numberOfRandomObjects: number;

  getRandomObjects() {
    let result: any = [];
    while (result.length < this.numberOfRandomObjects) {
      let randomIndex = Math.floor(Math.random() * this.array.length);
      let randomObject: any = this.array[randomIndex];
      if (!result.includes(randomObject)) {
        result.push(randomObject);
      }
    }
    return result;
  }

  checkNumberCompatibility(): boolean{
    if (this.numberOfRandomObjects > this.array.length){
      return false;
    } else{
      return true;
    }
  }

  setArray(array: ProductType[]): void {
    this.array = array;
  }

  setNumeroArray(numero: number): void{
    this.numberOfRandomObjects = numero;
  }

  getArray(): ProductType[]{
    return this.array;
  }

  getNumeroArray(): Number{
    return this.numberOfRandomObjects;
  }
}



