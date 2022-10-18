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
export class PaymentDTO {
  // here should go the schema definition for the database
  amount: number;
  provider: PaymentProvider;
  type: PaymentType;
  status: PaymentStatus;
  constructor(
    amount: number,
    provider: PaymentProvider,
    type: PaymentType,
    status: PaymentStatus,
  ) {
    this.amount = amount;
    this.provider = provider;
    this.type = type;
    this.status = status;
  }
}

// interface IUserProps {
// 	name: Username;
// 	email: Email;
// 	active: boolean;
//   }

//   class User extends Entity<IUserProps> {
// 	get name (): Username {
// 	  return this.props.name;
// 	}

// 	get email (): Email {
// 	  return this.props.email;
// 	}

// 	private constructor (props: IUserProps, id?: UniqueEntityId) {
// 	  super(props, id);
// 	}

// 	public isActive (): boolean {
// 	  return this.props.active;
// 	}

// 	public static createUser (props: IUserProps, id?: UniqueEntityId) : Result<User> {
// 	  const userPropsResult: Result = Guard.againstNullOrUndefined([
// 		{ propName: 'name', value: props.name },
// 		{ propName: 'email', value: props.email },
// 		{ propName: 'active', value: props.active }
// 	  ]);

// 	  if (userPropsResult.isSuccess) {
// 		return Result.ok<User>(new User(props, id))
// 	  } else {
// 		return Result.fail<User>(userPropsResult.error);
// 	  }
// 	}
//   }
