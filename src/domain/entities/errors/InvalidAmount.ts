import { DomainError } from './DomainError';

export class InvalidAmountError extends Error implements DomainError {
  constructor(name: number) {
    super(`The name "${name.toString()}" is invalid.`);
    this.name = 'InvalidAmountError';
  }
}
