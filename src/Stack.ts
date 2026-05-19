export class Stack {
  private isEmpty: boolean = true;

  public empty (): boolean {
    return this.isEmpty;
  }

  public push (element: any): void {
    this.isEmpty = false;
  }

  public pop(): any {
    this.isEmpty = true;
  }

  public peek(): any {
    return null;
  }
}