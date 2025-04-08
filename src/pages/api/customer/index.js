import Customer from "../../../../models/Customer";
import connectDB from "../../../../utils/ConnectDb";

export default async function handler(req, res) {
  try {
    await connectDB(); // اتصال به دیتابیس
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ status: "failed", message: "Error in connecting to DB" });
  }

  if (req.method === "POST") {
    try {
      const data = req.body.data; // نیازی به `.data` نیست، مگر اینکه از کلاینت `{ data: {...} }` ارسال کنید

      if (!data.name || !data.lastName || !data.email) {
        return res
          .status(400)
          .json({ status: "failed", message: "Invalid data" });
      }

      const customer = await Customer.create(data);
      return res
        .status(201)
        .json({ status: "success", message: "Data created", data: customer });
    } catch (err) {
      console.log(err);
      return res
        .status(500)
        .json({ status: "failed", message: "Error in storing data in DB" });
    }
  } else {
    // اگر متد غیر از POST باشد (مثل GET, PUT, DELETE)
    return res
      .status(405)
      .json({ status: "failed", message: "Method not allowed" });
  }
}
