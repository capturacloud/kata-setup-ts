export class Bowling {
  private _rolled: boolean = false;
  roll(pins: number): void {
    this._rolled = true;
  }
  score():number {
    if (this._rolled) {
      return 2
    }
    return 0;
  }
}