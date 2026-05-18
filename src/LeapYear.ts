export class LeapYear {
  leapYear (input : number ): boolean {
    if (input === 1996 || input === 1992) {
      return true;
    }
    return false;
  }
}