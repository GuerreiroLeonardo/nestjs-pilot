import { Either, left, right } from 'src/shared/either';
import { InvalidAmountError } from './errors/invalid-amount';
import { PaymentType, PaymentProvider, PaymentDTO } from './dto/payment-dto';

class Amount {
  public readonly amount;
  constructor(amount: number) {
    this.amount = amount;
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

export class Payment {
  public readonly amount: Amount;
  public readonly provider: PaymentProvider;
  public readonly type: PaymentType;

  private constructor(
    amount: Amount,
    provider: PaymentProvider,
    type: PaymentType,
  ) {
    this.amount = amount;
    this.provider = provider;
    this.type = type;
  }

  static create(paymentDTO: PaymentDTO): Either<InvalidAmountError, Payment> {
    const amountOrError: Either<InvalidAmountError, Amount> = Amount.create(
      paymentDTO.amount,
    );
    if (amountOrError.isLeft()) {
      return left(amountOrError.value);
    }

    const validatedAmount: Amount = amountOrError.value;

    return right(
      new Payment(validatedAmount, paymentDTO.provider, paymentDTO.type),
    );
  }
}
