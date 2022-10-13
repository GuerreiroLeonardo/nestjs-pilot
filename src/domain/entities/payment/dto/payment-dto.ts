export enum PaymentType {
  Credit = 'creditcard',
  Pix = 'pix',
}
export enum PaymentProvider {
  Pix = 'pix',
  Cielo = 'cielo',
}
export abstract class PaymentDTO {
  // here should go the schema definition for the database
  amount: number;
  provider: PaymentProvider;
  type: PaymentType;
  constructor(amount: number, provider: PaymentProvider, type: PaymentType) {
    this.amount = amount;
    this.provider = provider;
    this.type = type;
  }
}
