export class Customer {
  constructor(
    public firstName: string,
    public lastName: string,
    public insertion?: string
  ) {}

  format(): string {
    if (this.insertion) {
      return `${this.firstName} ${this.insertion} ${this.lastName}`;
    }
    return `${this.firstName} ${this.lastName}`;
  }
}
