export abstract class DomainError {
  message: string;
  constructor(message: string) {
    this.message = message;
  }
}
