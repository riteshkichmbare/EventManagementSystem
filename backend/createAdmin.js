require("dotenv").config();
const mongoose = require("mongoose");
const AuthUser = require("./model/authUserModel");

async function createAdmin() {
  const email = "admin@event.com";
  const password = "admin123";

  await mongoose.connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/UserDB");
  let admin = await AuthUser.findOne({ email });

  if (admin) {
    admin.role = "admin";
    admin.password = password;
    await admin.save();
  } else {
    admin = await AuthUser.create({ name: "Event Admin", email, password, role: "admin" });
  }

  console.log("Admin ready");
  console.log("Email:", email);
  console.log("Password:", password);
  await mongoose.disconnect();
}

createAdmin().catch((error) => {
  console.error("Could not create admin.", error.message);
  process.exit(1);
});
