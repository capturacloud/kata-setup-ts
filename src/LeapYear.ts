export class LeapYear {
  leapYear (input : number): boolean {
    if (input % 4 === 0) {
      return true;
    }
    return false;
  }
}