export class LeapYear {
  leapYear (input : number): boolean {
    if (input === 1800) {
      return false;
    }
    if (input % 4 === 0) {
      return true;
    }
    return false;
  }
}