export class Stack {
  private elements: any[] = [];

  public empty (): boolean {
    return this.elements.length === 0;
  }

  public push (element: any): void {
    this.elements.push(element);
  }

  public pop(): any {
    return this.elements.pop() ?? null;
  }

  public peek(): any {
    return this.elements.at(-1) ?? null;
  }

  public size(): number {
    return this.elements.length;
  }
}