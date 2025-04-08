import { Schema, model, models } from "mongoose";

const customerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 1,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      minLength: 1,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      match: /.+@.+\..+/,
      trim: true,
    },
    phone: { type: String, trim: true },
    address: { type: String, trim: true },
    postalCode: Number,
    date: Date,
    products: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

const Customer = models.Customer || model("Customer", customerSchema);

export default Customer;
