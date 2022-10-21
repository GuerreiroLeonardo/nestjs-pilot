/* eslint-disable prettier/prettier */

import { Either, left } from 'src/shared/either';
import { InvalidAmountError } from '../errors/InvalidAmount';
import { Amount } from '../valueObjects/AmountVO';

/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
export class Payment {
  public _id: string;
  private _amount: number;
  private _provider: PaymentProvider;
  private _type: PaymentType;
  private _status: PaymentStatus;
  private _createdAt: Date;

  constructor(props?: Partial<Payment>) {
    Object.assign(this, props);
  }

  //   GETTERS AND SETTERS
  public get id(): string {
    return this._id;
  }
  public get amount(): number {
    return this._amount;
  }
  public get provider(): PaymentProvider {
    return this._provider;
  }
  public get type(): PaymentType {
    return this._type;
  }
  public get status(): PaymentStatus {
    return this._status;
  }
  public get createdAt(): Date {
    return this._createdAt;
  }

  private set id(value: string) {
    this._id = value;
  }
  private set amount(value: number) {
    const amountOrError: Either<InvalidAmountError, Amount> =
      Amount.create(value);

    if (amountOrError.isLeft()) {
      throw left(amountOrError.value);
    }

    const validatedAmount: Amount = amountOrError.value;

    this._amount = validatedAmount.value;
  }
  private set provider(value: PaymentProvider) {
    this._provider = value;
  }
  private set type(value: PaymentType) {
    this._type = value;
  }
  private set status(value: PaymentStatus) {
    this._status = value;
  }
  private set createdAt(value: Date) {
    this._createdAt = value;
  }

  //   PUBLIC METHODS
  public setStatus(newStatus: PaymentStatus) {
    this._status = newStatus;
  }
}

export enum PaymentType {
  Credit = 'creditcard',
  Pix = 'pix',
}
export enum PaymentProvider {
  Pix = 'pix',
  Cielo = 'cielo',
}
export enum PaymentStatus {
  Pending = 'pending',
  Confirmed = 'confirmed',
}
