import { SchemaOptions } from 'mongoose';

export const DefaultSchemaOptions: SchemaOptions = {
  toObject: {
    aliases: false,
    getters: true,
    virtuals: true,
  },
  collection: 'payments',
};
