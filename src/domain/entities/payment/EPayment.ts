import { Either, left, right } from 'src/shared/either';
import { InvalidAmountError } from './errors/InvalidAmount';
import {
  PaymentType,
  PaymentProvider,
  PaymentDTO,
  PaymentStatus,
} from '../../dto/PaymentDTO';
import { InvalidPaymentError } from './errors/InvalidPayment';

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

export class EPayment {
  public readonly id: string;
  public readonly amount: Amount;
  public readonly provider: PaymentProvider;
  public readonly type: PaymentType;
  public readonly status: PaymentStatus;

  private constructor(
    amount: Amount,
    provider: PaymentProvider,
    type: PaymentType,
    status: PaymentStatus,
  ) {
    this.amount = amount;
    this.provider = provider;
    this.type = type;
    this.status = status;
  }

  static create(paymentDTO: PaymentDTO): Either<InvalidPaymentError, EPayment> {
    const amountOrError: Either<InvalidAmountError, Amount> = Amount.create(
      paymentDTO.amount,
    );
    if (amountOrError.isLeft()) {
      return left(amountOrError.value);
    }

    const validatedAmount: Amount = amountOrError.value;

    return right(
      new EPayment(
        validatedAmount,
        paymentDTO.provider,
        paymentDTO.type,
        paymentDTO.status,
      ),
    );
  }
}
