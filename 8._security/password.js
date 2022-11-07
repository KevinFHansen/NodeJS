import bcrypt from "bcrypt";

const saltRounds = 12;
const plaintextPassword = "hunter12";
const loginPassword = "hunter12";
const encryptedPassword = "$2b$12$GmVIzKu7/NI95WhANqp/wu2GDCylKNTDP.2koOPqq/76IlNXME3wa"

const encryptedPasswordResult = await bcrypt.hash(plaintextPassword, saltRounds);
//console.log(encryptedPasswordResult);

const passwordComparison = await bcrypt.compare(loginPassword, encryptedPassword);
console.log(passwordComparison)