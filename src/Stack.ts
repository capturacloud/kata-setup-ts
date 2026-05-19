export class Stack {
  private element: any = null;

  public empty (): boolean {
    return this.element === null;
  }

  public push (element: any): void {
    this.element = element;
  }

  public pop(): any {
    this.element = null;
  }

  public peek(): any {
    return this.element;
  }
}