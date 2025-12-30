import { sendVerificationEmail } from "./email";

async function testEmail() {
  const result = await sendVerificationEmail("test@example.com", "123456");
  console.log(result);
}
testEmail();