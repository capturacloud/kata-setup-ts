export class Stack {
  private element: any = null;
  private counter: number = 0;

  public empty (): boolean {
    return this.counter === 0;
  }

  public push (element: any): void {
    this.element = element;
    this.counter++;
  }

  public pop(): any {
    let element = this.element;

    this.element = null;
    this.counter--;

    return element;
  }

  public peek(): any {
    return this.element;
  }

  public size(): number {
    return this.counter;
  }
}