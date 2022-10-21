import { Either, left, right } from 'src/shared/either';
import { InvalidAmountError } from '../errors/InvalidAmount';

export class Amount {
  public readonly value;
  constructor(amount: number) {
    this.value = amount;
  }

  static create(amount: number): Either<InvalidAmountError, Amount> {
    if (!Amount.validate(amount)) {
      return left(new InvalidAmountError(amount));
    }
    return right(new Amount(amount));
  }

  // for more complicated logic create a validate function
  static validate(amount: number) {
    if (amount <= 0.0) {
      return false;
    }
    return true;
  }
}
