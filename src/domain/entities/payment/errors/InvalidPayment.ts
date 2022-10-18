import { DomainError } from 'src/domain/entities/payment/errors/DomainError';

export class InvalidPaymentError extends Error implements DomainError {
  constructor(name: number) {
    super(`The name "${name.toString()}" is invalid.`);
    this.name = 'InvalidPaymentError';
  }
}
