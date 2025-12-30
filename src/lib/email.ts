import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: false,
  auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
});

export async function sendVerificationEmail(email: string, code: string) {
  try {
    await transporter.sendMail({
      from: `"Multi-Role Auth App" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Verify Your Email Address",
      html: `
        <h2>Email Verification</h2>
        <p>Please use the following 6-digit code to verify your email:</p>
        <h3 style="font-size: 24px; color: #333;">${code}</h3>
        <p>This code expires in 10 minutes.</p>
        <p>Thank you,<br>Multi-Role Auth Team</p>
      `,
    });
    return { success: true };
  } catch (error) {
    console.error("Email sending error:", error);
    return { success: false, message: "Failed to send verification email" };
  }
}