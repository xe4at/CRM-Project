import { Schema, model, models } from "mongoose";

const customerSchema = new Schema({
  name: {
    type: String,
    require: true, //حتما وارد شود
    minLength: 1,
  },
  lastName: {
    type: String,
    require: true,
    minLength: 1,
  },
  email: {
    type: String,
    require: true,
    minLength: 1,
  },
  phone: String,
  address: String,
  postalCode: Number,
  data: Date,
  products: {
    type: Array,
    default: [],
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true, //قابل تغییر نباشد
  },
  updatedAt: { type: Date, default: () => Date.now() },
});

const Customer = models.Customer || model("Customer", customerSchema);

export default Customer;
