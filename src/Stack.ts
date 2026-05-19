export class Stack {
  private elements: any[] = [];
  private counter: number = 0;

  public empty (): boolean {
    return this.counter === 0;
  }

  public push (element: any): void {
    this.elements.push(element);
    this.counter++;
  }

  public pop(): any {
    let element = this.elements.pop() ?? null;

    this.counter--;

    return element;
  }

  public peek(): any {
    return this.elements.at(-1) ?? null;
  }

  public size(): number {
    return this.counter;
  }
}