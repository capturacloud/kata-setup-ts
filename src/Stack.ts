export class Stack {
  private element: any = null;
  private counter: number = 0;

  public empty (): boolean {
    return this.element === null;
  }

  public push (element: any): void {
    this.element = element;
    this.counter++;
  }

  public pop(): any {
    this.element = null;
  }

  public peek(): any {
    return this.element;
  }

  public size(): number {
    return this.counter;
  }
}