export class Employee {
  constructor(
    public firstName: string,
    public lastName: string,
    public department: string,
    public address: {
      street: string,
      city: string,
      state: string
    }
  ) {
  }
}
