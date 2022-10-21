import { DomainError } from './DomainError';

export class InvalidPaymentError extends Error implements DomainError {
  constructor(prop: string, value: string | number) {
    super(`The ${prop.toString()} ${value.toString()} is invalid.`);
    this.name = 'InvalidPaymentError';
  }
}
