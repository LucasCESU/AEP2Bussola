export class Matemagica{
  private a:number;
  private b:number;

  sum(): number {
      return this.a + this.b;
  }
  subtraction(): number {
      return this.a - this.b;
  }
  division(): number{
      return this.a / this.b;
  }
  multiplication(): number{
      return this.a * this.b;
  }
  setA(a: number){
      this.a = a;
  }
  setB(b: number){
      this.b = b;
  }
  getA(): number{
      return this.a;
  }
  getB(): number{
      return this.b;
  }


}
