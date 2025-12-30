import SignUpForm from "@/app/auth/signup/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BriskMD | Signup",
  description: "BriskMD | Signup",
};

export default function SignUp() {
  return <SignUpForm />;
}
